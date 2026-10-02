from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..dependencies import get_current_user, require_manager
from ..models import SiteContent, User
from ..schemas import ContentUpdate

router = APIRouter(prefix="/api/content", tags=["Content"])

@router.get("")
def get_content(_: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return {row.content_key: row.content_value for row in db.query(SiteContent).all()}

@router.put("/{key}")
def update_content(key: str, data: ContentUpdate, user: User = Depends(require_manager), db: Session = Depends(get_db)):
    row = db.query(SiteContent).filter(SiteContent.content_key == key).first()
    if row:
        row.content_value = data.content_value
        row.updated_by = user.id
    else:
        db.add(SiteContent(content_key=key, content_value=data.content_value, updated_by=user.id))
    db.commit()
    return {"message": "Content updated"}
