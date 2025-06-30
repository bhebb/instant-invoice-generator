from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def create_invoice_template():
    return {"message": "invoice tempate created successfully"}

@router.get("templates/{template_id}")
def get_invoice_template(template_id: str):
    return {"message": f"invoice template {template_id} retrieved successfully"}

@router.get("templates/{user_id}/all")
def get_all_invoice_templates(user_id: str):
    return {"message": f"all invoice templates for user {user_id} retrieved successfully"}

@router.post("templates/{user_id}/create")
def create_invoice_template_for_user(user_id: str):
    return {"message": f"invoice template created for user {user_id} successfully"}

@router.put("templates/{template_id}/update")
def update_invoice_template(template_id: str):
    return {"message": f"invoice template {template_id} updated successfully"}  

@router.delete("templates/{template_id}/delete")
def delete_invoice_template(template_id: str):
    return {"message": f"invoice template {template_id} deleted successfully"}  

@router.get("invoices")
def get_all_invoices():
    return {"message": "all invoices retrieved successfully"}   

@router.get("invoices/{invoice_id}")
def get_invoice(invoice_id: str):
    return {"message": f"invoice {invoice_id} retrieved successfully"}              

@router.post("invoices/{templateId}")       
def create_invoice_from_template(templateId: str):
    return {"message": f"invoice created from template {templateId} successfully"}

@router.post("invoices/send")
def send_invoice(invoice_id: str, email_template_id: str, user_id: str):        
    return {"message": f"invoice {invoice_id} sent to user {user_id} with email template {email_template_id} successfully"}
