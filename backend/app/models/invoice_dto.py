from pydantic import BaseModel

class InvoiceDTO(BaseModel):
    id: str
    last_generated_date: str
    name: str | None = None
    prestataire: str | None = None
    consumer: str | None = None
    template_id: str | None = None
   