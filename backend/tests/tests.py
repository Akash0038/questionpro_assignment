import unittest
from fastapi.testclient import TestClient
import sys
sys.path.append("..")
from main import app


class TestEndpoints(unittest.TestCase):
    def setUp(self):
        self.app = app
        self.client = TestClient(self.app)

    def test_top_stories(self):
        response = self.client.get("/top-stories")
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.json())
        print("test_top_stories test passed")

    def test_past_stories(self):
        # test get
        response = self.client.get("/past-stories")
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.json())
        print("test_past_stories test passed")

    def test_comments(self):
        response = self.client.get("/comments/1")
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.json())
        print("test_past_comments test passed")

if __name__ == '__main__':
    testEndpoint = TestEndpoints()
    testEndpoint.setUp()
    testEndpoint.test_top_stories()
    testEndpoint.test_past_stories()
    testEndpoint.test_comments()
