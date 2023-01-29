import common
import requests
from database import insert_story


def sort_data(data, isComment=False):
    if isComment:
        return sorted(data, key=lambda x: len(x["kids"]), reverse=True)
    return sorted(data, key=lambda x: x.get("score", 0), reverse=True)


def get_story_data(story_id):
    story_url = f"{common.HACKER_NEWS_URL}item/{story_id}.json"
    return requests.get(story_url).json()


def get_comment_data(comment_id):
    comment_url = f"{common.HACKER_NEWS_URL}item/{comment_id}.json"
    return requests.get(comment_url).json()


def get_top_stories():
    url = f"{common.HACKER_NEWS_URL}topstories.json"
    return requests.get(url).json()


def get_top_stories_details(top_stories_ids):
    top_stories_data = []
    for story_id in top_stories_ids[:10]:
        story_data = get_story_data(story_id)
        url = story_data["url"] if "url" in story_data else "NA"
        top_stories_data.append({
            "id": story_data["id"],
            "title": story_data["title"],
            "url": url,
            "score": story_data["score"],
            "time_of_submission": story_data["time"],
            "user": story_data["by"]
        })
    return top_stories_data


def get_top_comments_details(story_data):
    comments_data = []
    if "kids" in story_data:
        for comment_id in story_data["kids"][:10]:
            comment_data = get_comment_data(comment_id)
            comments_data.append({
                "id": comment_data["id"],
                "text": comment_data["text"],
                "user": comment_data["by"],
                "kids": comment_data.get("kids", [])
            })
        return comments_data
    return []


def insert_into_past_stories(stories):
    for story in stories:
        insert_story(story)
