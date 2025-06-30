from fastapi import APIRouter, Depends
from app.core.security import get_current_user, clerk_auth
from app.models.user_dto import UserDTO

router = APIRouter()

@router.get("/me", tags=["Auth"], response_model=UserDTO)
def me(user: UserDTO=Depends(get_current_user)):
    print("✅ User info :", user)
    return user