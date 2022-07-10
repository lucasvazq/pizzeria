from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.controllers.views import user_router

app = FastAPI()
app.router.prefix = "/api/v1"
app.include_router(user_router, prefix="/user")

app.add_middleware(
    CORSMiddleware,
    allow_origins=("*",),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
