import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./khandan_khidmat.db")
JWT_SECRET = os.getenv("JWT_SECRET", "change-this-secret-before-production")
JWT_ALGORITHM = "HS256"
TOKEN_EXPIRE_MINUTES = int(os.getenv("TOKEN_EXPIRE_MINUTES", "480"))
DEFAULT_MANAGER_EMAIL = os.getenv("DEFAULT_MANAGER_EMAIL", "")
DEFAULT_MANAGER_PASSWORD = os.getenv("DEFAULT_MANAGER_PASSWORD", "")
DEFAULT_MANAGER_NAME = os.getenv("DEFAULT_MANAGER_NAME", "Foundation Manager")
