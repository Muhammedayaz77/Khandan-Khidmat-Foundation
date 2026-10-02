from decimal import Decimal
from pydantic import BaseModel, EmailStr, Field

class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str

class MemberCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(min_length=6)
    phone: str | None = None
    address: str | None = None
    monthly_contribution: Decimal = 0

class MemberUpdate(BaseModel):
    name: str | None = None
    phone: str | None = None
    address: str | None = None
    monthly_contribution: Decimal | None = None
    is_active: bool | None = None

class FinanceCreate(BaseModel):
    transaction_type: str = Field(pattern="^(income|expense)$")
    amount: Decimal = Field(gt=0)
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None

class ContentUpdate(BaseModel):
    content_value: str
