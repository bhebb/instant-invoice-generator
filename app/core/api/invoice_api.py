from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def create_invoice_template():
    return {"message": "invoice tempate created successfully"}
