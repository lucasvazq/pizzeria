from fastapi.testclient import TestClient
from jose.jwt import encode

from src.env import JWT_SECRET_KEY
from src.main import app

client = TestClient(app)


# TODO:
# - Falta crear una BD para tests y limpiarla cada vez que se ejecuten.


def test_create_pizza():
    token = encode({"email": "test@test.com"}, JWT_SECRET_KEY, "HS256")
    response = client.post(
        "/api/v1/pizzas",
        headers={"Authorization": f"Bearer {token}"},
        json={
            "name": "Napolitana",
            "price": 200,
        }
    )

    assert response.status_code == 201


def test_create_pizza_with_invalid_token():
    response = client.post(
        "/api/v1/pizzas",
        headers={"Authorization": "Bearer fake_token"},
    )

    assert response.status_code == 401
    assert response.json() == {"detail": "Unauthorized token"}


def test_get_pizzas():
    response = client.get("/api/v1/pizzas")

    assert response.status_code == 200
    assert response.json() == [
        {
            "name": "Napolitana",
            "price": 200,
        },
    ]
