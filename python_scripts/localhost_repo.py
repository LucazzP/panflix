import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1OTEyMzk2NzUsImV4cCI6MTU5MTI0Njg3NX0.4Huq4lFz67RNka4KmYSZegrhHPgYVUojE8qwz4IKQ3Y'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3333'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
