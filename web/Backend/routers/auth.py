from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..config import DEFAULT_MANAGER_EMAIL, DEFAULT_MANAGER_PASSWORD, DEFAULT_MANAGER_NAME
from ..database import get_db
from ..dependencies import get_current_user
from ..models import User
from ..schemas import LoginRequest, UserOut
from ..security import create_access_token, hash_password, verify_password

router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email.lower()).first()
    if not user or not user.is_active or not verify_password(data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"access_token": create_access_token(user.id, user.role), "token_type": "bearer", "user": UserOut.model_validate(user, from_attributes=True)}

@router.get("/me", response_model=UserOut)
def me(user: User = Depends(get_current_user)):
    return user

def seed_manager(db: Session):
    if not DEFAULT_MANAGER_EMAIL or not DEFAULT_MANAGER_PASSWORD:
        return
    existing = db.query(User).filter(User.email == DEFAULT_MANAGER_EMAIL.lower()).first()
    if not existing:
        db.add(User(name=DEFAULT_MANAGER_NAME, email=DEFAULT_MANAGER_EMAIL.lower(), password_hash=hash_password(DEFAULT_MANAGER_PASSWORD), role="manager"))
        db.commit()
