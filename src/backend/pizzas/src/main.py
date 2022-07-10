from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.controllers.views import pizzas_router

app = FastAPI()
app.router.prefix = "/api/v1"
app.include_router(pizzas_router, prefix="/pizzas")

app.add_middleware(
    CORSMiddleware,
    allow_origins=("*",),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
