from pydantic import BaseModel

class InvoiceDTO(BaseModel):
    id: str
    last_generated_date: str | None = None
    name: str | None = None
    prestataire: str | None = None
    client: str | None = None
    template_id: str | None = None
    title: str | None = None
    amount: float 
    status: str| None = None
   