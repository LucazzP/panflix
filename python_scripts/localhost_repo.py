import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1OTAwODQ4NjMsImV4cCI6MTU5MDA5MjA2M30.-5WnB30sEADsxBTSHv-BVbmkH5oXJWUOOGwqnSZxl0Q'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3333'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
