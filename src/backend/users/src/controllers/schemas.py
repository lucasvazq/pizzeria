from pydantic.main import BaseModel
from pydantic.networks import EmailStr
from pydantic.types import constr


class UserSchema(BaseModel):
   email: EmailStr


class UserCreationSchema(BaseModel):
   email: EmailStr
   password: constr(max_length=16)


class TokenSchema(BaseModel):
   access_token: str


class TokenInternalSchema(BaseModel):
   email: EmailStr
