from fastapi.exceptions import HTTPException
from fastapi.params import Depends
from fastapi.responses import Response
from fastapi.routing import APIRouter
from fastapi import Header
from sqlalchemy.orm.session import Session

from src.controllers.schemas import PizzaSchema
from src.controllers.services import VerifyJWT
from src.controllers.services import CreatePizza
from src.controllers.services import GetPizzas
from src.controllers.services import GetPizzaByName
from src.models.db import get_db

pizzas_router = APIRouter()


async def verify_jwt(authorization: str = Header(), db: Session = Depends(get_db)):
    if not VerifyJWT(db)(authorization):
        raise HTTPException(status_code=401, detail="Unauthorized token")


@pizzas_router.post("", response_class=Response, status_code=201, dependencies=[Depends(verify_jwt)])
async def create_pizza(data: PizzaSchema, db: Session = Depends(get_db)):
    if GetPizzaByName(db)(data.name):
        raise HTTPException(
            status_code=409,
   	        detail="Pizza already registered",
        )
    CreatePizza(db)(data)


@pizzas_router.get("", response_model=list[PizzaSchema])
async def get_pizzas(db: Session = Depends(get_db)):
    return [pizza.serialize() for pizza in GetPizzas(db)()]
