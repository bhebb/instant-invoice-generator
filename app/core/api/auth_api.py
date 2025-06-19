from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def create_token():
    return {"message": "token created successfully"}
