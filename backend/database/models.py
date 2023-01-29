import redis
import common
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()
redis_client = redis.Redis(host=common.REDIS_HOST, port=common.REDIS_PORT, db=common.REDIS_DB)


class PastStories(Base):
    __tablename__ = 'stories'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    url = Column(String)
    score = Column(Integer)
    time_of_submission = Column(String)
    user = Column(String)


engine = create_engine(common.DB)
Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
