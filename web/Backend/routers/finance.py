from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from ..database import get_db
from ..dependencies import get_current_user, require_manager
from ..models import FinanceTransaction, User
from ..schemas import FinanceCreate

router = APIRouter(prefix="/api/finance", tags=["Finance"])

def summary(db: Session):
    income = db.query(func.coalesce(func.sum(FinanceTransaction.amount), 0)).filter(FinanceTransaction.transaction_type == "income").scalar() or 0
    expense = db.query(func.coalesce(func.sum(FinanceTransaction.amount), 0)).filter(FinanceTransaction.transaction_type == "expense").scalar() or 0
    return {"total_income": float(income), "total_expense": float(expense), "balance": float(income - expense)}

@router.get("/summary")
def get_summary(_: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return summary(db)

@router.get("/transactions")
def get_transactions(_: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(FinanceTransaction).order_by(FinanceTransaction.created_at.desc()).all()
    return [{"id": r.id, "type": r.transaction_type, "amount": float(r.amount), "title": r.title,
             "description": r.description, "created_at": r.created_at.isoformat()} for r in rows]

@router.post("/transactions")
def add_transaction(data: FinanceCreate, user: User = Depends(require_manager), db: Session = Depends(get_db)):
    row = FinanceTransaction(transaction_type=data.transaction_type, amount=data.amount, title=data.title, description=data.description, created_by=user.id)
    db.add(row); db.commit(); db.refresh(row)
    return {"id": row.id, "message": "Transaction added", "summary": summary(db)}
