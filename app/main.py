from fastapi import FastAPI
from app.core.api import ping_api, auth_api, invoice_api  # ajoute tous tes routers ici

app = FastAPI(
    title="Instant Invoice Generator",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Monte tous les routers ici
app.include_router(ping_api.router, prefix="/ping", tags=["Ping"])
app.include_router(auth_api.router, prefix="/auth", tags=["Auth"])
app.include_router(invoice_api.router, prefix="/invoices", tags=["Factures"])
