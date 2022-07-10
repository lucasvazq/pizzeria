from abc import ABC
from typing import Literal

from bcrypt import checkpw
from bcrypt import gensalt
from bcrypt import hashpw
from jose.exceptions import JWTError
from jose.jwt import encode
from jose.jwt import decode
from sqlalchemy.orm.session import Session
from sqlalchemy import func

from src.env import JWT_SECRET_KEY
from src.models.models import UserModel
from src.controllers.schemas import UserCreationSchema
from src.controllers.schemas import TokenInternalSchema


class BaseService(ABC):
    db = Session

    def __init__(self, db: Session):
        self.db = db


class CreateJWT(BaseService):
    def __call__(self, email: str) -> str:
        return encode({"email": email}, JWT_SECRET_KEY, "HS256")


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


class CreateUser(BaseService):
    def __call__(self, data: UserCreationSchema):
        self.db.add(
            UserModel(
                email=data.email,
                hashed_password=self._hash_password(data.password),
            ),
        )
        self.db.commit()

    @staticmethod
    def _hash_password(password) -> str:
        return hashpw(password.encode(), gensalt()).decode()


class GetUserByEmail(BaseService):
    def __call__(self, email: str) -> UserModel | None:
        return self.db.query(UserModel).filter(func.lower(UserModel.email) == email.lower()).first()


class GetUserByJWT(BaseService):
    def __call__(self, authorization: str) -> UserModel | None:
        if token_data := VerifyJWT(self.db)(authorization):
            return self.db.query(UserModel).filter(UserModel.email == token_data["email"]).first()
        return None


class ValidatePassword(BaseService):
    def __call__(self, user: UserModel, password: str) -> bool:
        return checkpw(password.encode(), user.hashed_password.encode())
