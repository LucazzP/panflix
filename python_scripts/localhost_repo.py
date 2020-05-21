import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1OTAwMjYyMDcsImV4cCI6MTU5MDAzMzQwN30.1Ck7YSQys5ddmAn_CkZ9byRZ_lWLkXZDpyN3rCSTcyA'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3333'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
