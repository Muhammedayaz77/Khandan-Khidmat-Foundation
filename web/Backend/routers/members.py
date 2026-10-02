from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..dependencies import require_manager
from ..models import MemberProfile, User
from ..schemas import MemberCreate, MemberUpdate
from ..security import hash_password

router = APIRouter(prefix="/api/members", tags=["Members"])

@router.get("")
def list_members(_: User = Depends(require_manager), db: Session = Depends(get_db)):
    users = db.query(User).filter(User.role == "member").order_by(User.name).all()
    return [{"id": u.id, "name": u.name, "email": u.email, "is_active": u.is_active,
             "phone": u.member_profile.phone if u.member_profile else None,
             "address": u.member_profile.address if u.member_profile else None,
             "monthly_contribution": float(u.member_profile.monthly_contribution or 0) if u.member_profile else 0} for u in users]

@router.post("")
def create_member(data: MemberCreate, _: User = Depends(require_manager), db: Session = Depends(get_db)):
    email = data.email.lower()
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=409, detail="Email already exists")
    user = User(name=data.name, email=email, password_hash=hash_password(data.password), role="member")
    db.add(user); db.flush()
    db.add(MemberProfile(user_id=user.id, phone=data.phone, address=data.address, monthly_contribution=data.monthly_contribution))
    db.commit(); db.refresh(user)
    return {"id": user.id, "message": "Member created"}

@router.patch("/{member_id}")
def update_member(member_id: int, data: MemberUpdate, _: User = Depends(require_manager), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == member_id, User.role == "member").first()
    if not user: raise HTTPException(status_code=404, detail="Member not found")
    if data.name is not None: user.name = data.name
    if data.is_active is not None: user.is_active = data.is_active
    profile = user.member_profile or MemberProfile(user_id=user.id)
    if data.phone is not None: profile.phone = data.phone
    if data.address is not None: profile.address = data.address
    if data.monthly_contribution is not None: profile.monthly_contribution = data.monthly_contribution
    db.add(profile); db.commit()
    return {"message": "Member updated"}
