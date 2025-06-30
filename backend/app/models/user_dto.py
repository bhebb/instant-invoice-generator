from pydantic import BaseModel

class UserDTO(BaseModel):
    id: str
    email: str
    first_name: str | None = None
    last_name: str | None = None
    username: str | None = None
    image_url: str | None = None
    full_name: str | None = None