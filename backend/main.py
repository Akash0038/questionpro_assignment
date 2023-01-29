import json
import traceback
from utils import *
from fastapi import FastAPI
from database import fetch_stories, redis_client
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[common.CORS_ALLOW_ORIGIN]
)

@app.get("/top-stories")
def top_stories():
    try:
        top_stories_data = redis_client.get("top_stories_data")
        if top_stories_data:
            print("CACHED STORIES")
            top_stories_data = json.loads(top_stories_data)
        else:
            print("NOT CACHED STORIES")
            top_stories_ids = get_top_stories()
            top_stories_data = get_top_stories_details(top_stories_ids)
            redis_client.set("top_stories_data", json.dumps(top_stories_data))
            redis_client.expire("top_stories_data", common.TTL)
            if top_stories_data:
                insert_into_past_stories(top_stories_data)
        return sort_data(top_stories_data)
    except Exception:
        traceback.print_exc()
        return common.ERROR_RESPONSE


@app.get("/comments/{story_id}")
def comments(story_id: int):
    try:
        comments_data = redis_client.get(f"comments_{story_id}")
        if comments_data:
            print("CACHED COMMENTS")
            comments_data = json.loads(comments_data)
        else:
            print("NOT CACHED COMMENTS")
            story_data = get_story_data(story_id)
            comments_data = get_top_comments_details(story_data)
            redis_client.set(f"comments_{story_id}", json.dumps(comments_data))
            redis_client.expire(f"comments_{story_id}", common.TTL)
        return sort_data(comments_data, isComment=True)
    except Exception:
        traceback.print_exc()
        return common.ERROR_RESPONSE



@app.get("/past-stories")
def past_stories():
    try:
        stories = fetch_stories()
        past_stories = [story.__dict__ for story in stories]
        past_stories = sorted(past_stories, key=lambda x: x.get("score", 0), reverse=True)
        return sort_data(past_stories)
    except Exception:
        traceback.print_exc()
        return common.ERROR_RESPONSE

