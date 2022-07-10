from fastapi.exceptions import HTTPException
from fastapi.params import Depends
from fastapi.responses import Response
from fastapi.routing import APIRouter
from fastapi import Header
from sqlalchemy.orm.session import Session

from src.controllers.schemas import UserSchema
from src.controllers.schemas import UserCreationSchema
from src.controllers.schemas import TokenSchema
from src.controllers.services import GetUserByEmail
from src.controllers.services import GetUserByJWT
from src.controllers.services import CreateJWT
from src.controllers.services import CreateUser
from src.controllers.services import ValidatePassword
from src.controllers.services import VerifyJWT
from src.models.db import get_db

user_router = APIRouter()


async def verify_jwt(authorization: str = Header(), db: Session = Depends(get_db)):
    if not VerifyJWT(db)(authorization):
        raise HTTPException(status_code=401, detail="Unauthorized token")


@user_router.post("/register", response_class=Response, status_code=201)
def register(data: UserCreationSchema, db: Session = Depends(get_db)):
    if GetUserByEmail(db)(data.email):
        raise HTTPException(
            status_code=409,
   	        detail="Email already registered",
        )
    CreateUser(db)(data)


@user_router.post("/login", response_model=TokenSchema)
def login(data: UserCreationSchema, db: Session = Depends(get_db)):
    user = GetUserByEmail(db)(data.email)
    if not user or not ValidatePassword(db)(user, data.password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )
    return {"access_token": CreateJWT(db)(user.email)}


@user_router.get("/profile", response_model=UserSchema, dependencies=[Depends(verify_jwt)])
async def get_profile(db: Session = Depends(get_db), authorization: str = Header()):
    user = GetUserByJWT(db)(authorization)
    if not user:
        raise HTTPException(
            status_code=401,
   	        detail="Invalid token",
        )
    return user.serialize()
