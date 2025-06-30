from fastapi import FastAPI, Depends
from dotenv import load_dotenv
from app.api import ping_api, auth_api, invoice_api 
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.openapi.utils import get_openapi

from fastapi.responses import JSONResponse
from fastapi.requests import Request
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
# from app.core.security import clerk_auth

load_dotenv()

security = HTTPBearer()

app = FastAPI()

# Personnaliser le schéma OpenAPI pour inclure l’authentification
from fastapi.openapi.utils import get_openapi

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="Instant Invoice Generator API",
        version="1.0.0",
        description="API documentation for Instant Invoice Generator",
        routes=app.routes,
    )

    # S'assurer que les composants existent
    if "components" not in openapi_schema:
        openapi_schema["components"] = {}

    if "securitySchemes" not in openapi_schema["components"]:
        openapi_schema["components"]["securitySchemes"] = {}

    openapi_schema["components"]["securitySchemes"]["BearerAuth"] = {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
    }

    openapi_schema["security"] = [{"BearerAuth": []}]
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi


@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal Server Error: {str(exc)}"},
    )
# app = FastAPI(
#     title="Instant Invoice Generator",
#     version="0.1.0",
#     docs_url="/docs",
#     redoc_url="/redoc",
# )
# app.middleware("http")(clerk_auth)

# Monte tous les routers ici
app.include_router(ping_api.router, prefix="/ping", tags=["Ping"])
app.include_router(auth_api.router, prefix="/auth", tags=["Auth"])
app.include_router(invoice_api.router, prefix="/invoices", tags=["Factures"])
