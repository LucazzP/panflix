import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1OTI1MjIyMTIsImV4cCI6MTU5MjUyOTQxMn0.TXNjzxxFgaOTbbvNBsn8KMQ6roi9gYvozl2uWzDK_qg'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3333'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
