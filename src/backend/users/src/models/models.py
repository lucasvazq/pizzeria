from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from sqlalchemy.sql.sqltypes import String

from src.models.db import Base
from src.models.db import engine
from src.controllers.schemas import UserSchema


class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String(254))
    hashed_password = Column(String(60))

    def serialize(self) -> UserSchema:
        return {
            "email": self.email,
        }

Base.metadata.create_all(engine)
