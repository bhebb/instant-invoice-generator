from app.models.invoice_dto import InvoiceDTO


def list_invoices() -> list[InvoiceDTO]:
    # Mocked data for now
    return [
        InvoiceDTO(id="1", client="Morgan Stanley", title="Website development", amount=2500.00, status="Paid"),
        InvoiceDTO(id="2", client="Perkuto", title="Consulting - March", amount=1200.00, status="Unpaid"),
    ]