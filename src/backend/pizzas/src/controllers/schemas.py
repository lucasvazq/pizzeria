from pydantic.main import BaseModel
from pydantic.networks import EmailStr
from pydantic.types import conint
from pydantic.types import constr


class PizzaSchema(BaseModel):
   name: constr(max_length=50)
   price: conint(gt=0, lt=9999)


class TokenInternalSchema(BaseModel):
   email: EmailStr
