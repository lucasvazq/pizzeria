from sqlalchemy.engine.create import create_engine
from sqlalchemy.orm.decl_api import declarative_base
from sqlalchemy.orm.session import sessionmaker, Session
from sqlalchemy.engine.url import URL

from src.env import DATABASE_HOST
from src.env import DATABASE_NAME
from src.env import DATABASE_PASSWORD
from src.env import DATABASE_USERNAME

db_url = URL.create(
    drivername="postgresql+psycopg2",
    host=DATABASE_HOST,
    database=DATABASE_NAME,
    password=DATABASE_PASSWORD,
    username=DATABASE_USERNAME,
)

engine = create_engine(db_url, pool_pre_ping=True)
session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db() -> Session:
    db = session()
    try:
        yield db
    finally:
        db.close()
