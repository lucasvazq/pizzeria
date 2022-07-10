from fastapi.testclient import TestClient
from jose.jwt import decode

from src.env import JWT_SECRET_KEY
from src.main import app

client = TestClient(app)


# TODO:
# - Falta crear una BD para tests y limpiarla cada vez que se ejecuten.


def test_register():
    response = client.post(
        "/api/v1/user/register",
        json={
            "email": "test@test.com",
            "password": "password",
        },
    )

    assert response.status_code == 201


def test_login():
    response = client.post(
        "/api/v1/user/login",
        json={
            "email": "test@test.com",
            "password": "password",
        },
    )

    assert response.status_code == 200
    token = response.json()["access_token"]
    assert decode(token, JWT_SECRET_KEY, algorithms="HS256")


def test_get_profile_with_invalid_token():
    response = client.get(
        "/api/v1/user/profile",
        headers={"Authorization": "Bearer fake_token"},
    )

    assert response.status_code == 401
    assert response.json() == {"detail": "Unauthorized token"}
