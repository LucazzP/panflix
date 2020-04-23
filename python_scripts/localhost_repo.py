import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1ODc2NjA3ODksImV4cCI6MTU4NzY2Nzk4OX0.5XEJki9kWGWoztvxjhQLpzAlIPooWwDpgzdRMAfoRxU'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3030'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
