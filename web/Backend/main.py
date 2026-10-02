from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from .database import Base, SessionLocal, engine
from .routers import auth, members, finance, content
from .routers.auth import seed_manager

Base.metadata.create_all(bind=engine)
with SessionLocal() as db:
    seed_manager(db)

app = FastAPI(title="Khandan Khidmat Foundation API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=False, allow_methods=["*"], allow_headers=["*"])
app.include_router(auth.router)
app.include_router(members.router)
app.include_router(finance.router)
app.include_router(content.router)

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "Khandan Khidmat Foundation"}

web_root = Path(__file__).resolve().parent.parent
app.mount("/assets", StaticFiles(directory=web_root / "Assets"), name="assets")
app.mount("/auth", StaticFiles(directory=web_root / "View" / "Auth", html=True), name="auth-pages")
app.mount("/member", StaticFiles(directory=web_root / "View" / "Member", html=True), name="member-pages")
app.mount("/manager", StaticFiles(directory=web_root / "View" / "Manager", html=True), name="manager-pages")
app.mount("/", StaticFiles(directory=web_root / "View" / "Public", html=True), name="public")
