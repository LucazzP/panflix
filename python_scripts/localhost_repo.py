import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1ODk3NjA2MjAsImV4cCI6MTU4OTc2NzgyMH0.Zsnu1E4wemLC2KGq-iZu6MzXF1Do3il1f3dFLHj9voE'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3333'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
