from .models import SessionLocal, PastStories


def insert_story(story):
    session = SessionLocal()
    past_story = session.query(PastStories).filter_by(id=story["id"]).first()
    if past_story is None:
        past_story = PastStories(
            id=story["id"],
            title=story["title"],
            url=story["url"],
            score=story["score"],
            time_of_submission=story["time_of_submission"],
            user=story["user"])
        session.add(past_story)
        session.commit()
    session.close()


def fetch_stories():
    session = SessionLocal()
    stories = session.query(PastStories).all()
    session.close()
    return stories
