import os
from fastapi import Depends, HTTPException, status, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from clerk_backend_api import Clerk
from clerk_backend_api.security.types import AuthenticateRequestOptions

from app.models.user_dto import UserDTO

CLERK_SECRET = os.getenv("CLERK_SECRET_KEY")
if not CLERK_SECRET:
    raise RuntimeError("CLERK_SECRET_KEY must be set in environment")

CLERK_JWT_KEY = os.getenv("CLERK_JWT_KEY")
# if not CLERK_JWT_KEY:
#     raise RuntimeError("CLERK_JWT_KEY must be set in environment")

clerk = Clerk(bearer_auth=CLERK_SECRET)

security = HTTPBearer()


async def clerk_auth(request: Request)-> UserDTO:
    # Ignorer les routes de documentation
    if request.url.path in ["/ping", "/docs", "/redoc", "/openapi.json"]:
        return None
    try:
        auth_result = clerk.authenticate_request(
            request=request,
            # For local testing, remove authorized_parties or set it to match your JWT's azp claim
            options=AuthenticateRequestOptions(
                # authorized_parties=["your-local-azp-value"]  # Uncomment and set if needed
            )
        )
        print("✅ Authentification réussie :", auth_result)
        if not auth_result or not auth_result.is_signed_in:
            raise HTTPException(status_code=401, detail="Invalid or expired session")
      
        payload = auth_result.payload
      
        if not payload:
            raise HTTPException(status_code=401, detail="Invalid token payload")
      
        return UserDTO(
            id=payload.get("sub"),
            email=payload.get("email"),
            first_name=payload.get("first_name"),
            last_name=payload.get("last_name"),
            external_id=payload.get("external_id"),
            image_url=payload.get("image_url"),
            full_name=payload.get("full_name"),
            username=payload.get("username")
    )
      # Retourne le payload de l'utilisateur authentifié
        # Retourner les infos de l'utilisateur après authentification
        # auth_result (RequestState) contient généralement user_id, session_id, payload, etc.
        return auth_result
    except Exception as e:
        print("❌ Erreur de validation :", e)  
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")


async def get_current_user(user: UserDTO = Depends(clerk_auth)):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
   
    return user
    # Tu peux enrichir ou vérifier les rôles ici
