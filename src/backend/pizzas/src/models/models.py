from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from sqlalchemy.sql.sqltypes import String

from src.controllers.schemas import PizzaSchema
from src.models.db import Base
from src.models.db import engine


class PizzaModel(Base):
    __tablename__ = "pizzas"
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    price = Column(Integer)

    def serialize(self) -> PizzaSchema:
        return {
            "name": self.name,
            "price": self.price,
        }


Base.metadata.create_all(engine)
