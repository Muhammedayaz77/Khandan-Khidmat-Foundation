from datetime import datetime
from decimal import Decimal
from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .database import Base

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(180), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[str] = mapped_column(String(20), default="member", index=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    member_profile = relationship("MemberProfile", back_populates="user", uselist=False, cascade="all, delete-orphan")

class MemberProfile(Base):
    __tablename__ = "member_profiles"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), unique=True)
    phone: Mapped[str | None] = mapped_column(String(30), nullable=True)
    address: Mapped[str | None] = mapped_column(String(250), nullable=True)
    monthly_contribution: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0)
    user = relationship("User", back_populates="member_profile")

class FinanceTransaction(Base):
    __tablename__ = "finance_transactions"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    transaction_type: Mapped[str] = mapped_column(String(20), index=True)  # income / expense
    amount: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    title: Mapped[str] = mapped_column(String(180))
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_by: Mapped[int] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class SiteContent(Base):
    __tablename__ = "site_content"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    content_key: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    content_value: Mapped[str] = mapped_column(Text)
    updated_by: Mapped[int] = mapped_column(ForeignKey("users.id"))
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
