from abc import ABC
from typing import Literal

from jose.exceptions import JWTError
from jose.jwt import decode
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.functions import func

from src.controllers.schemas import PizzaSchema
from src.controllers.schemas import TokenInternalSchema
from src.env import JWT_SECRET_KEY
from src.models.models import PizzaModel


class BaseService(ABC):
    db = Session

    def __init__(self, db: Session):
        self.db = db


class VerifyJWT(BaseService):
    def __call__(self, authorization: str) -> TokenInternalSchema | Literal[False]:
        token = authorization.split(" ", 1)[1]
        try:
            data = decode(token, JWT_SECRET_KEY, algorithms="HS256")
        except JWTError:
            return False
        if "email" not in data:
            return False
        return data


class CreatePizza(BaseService):
    def __call__(self, data: PizzaSchema):
        self.db.add(
            PizzaModel(
                name=data.name,
                price=data.price,
            ),
        )
        self.db.commit()


class GetPizzas(BaseService):
    def __call__(self) -> list[PizzaModel]:
        return self.db.query(PizzaModel).all()


class GetPizzaByName(BaseService):
    def __call__(self, name) -> bool:
        return (
            self.db.query(
                PizzaModel
            ).filter(
                func.lower(PizzaModel.name) == name.lower()
            ).first()
        )
