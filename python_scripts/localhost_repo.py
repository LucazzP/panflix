import requests


class LocalhostRepo:
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywicGVybWlzc2lvbnMiOjEwLCJpYXQiOjE1ODc2Njg3NTIsImV4cCI6MTU4NzY3NTk1Mn0.cQC9ZJu4aqiAynFoiPDdXBz7eRFBWH9mvPdDSMX9nVg'
    authHeader = {"Authorization": "Bearer " + token}
    baseUrl = 'http://localhost:3030'

    def get(self, url):
        return requests.get(self.baseUrl + url, headers=self.authHeader)

    def post(self, url, data):
        return requests.post(self.baseUrl + url, headers=self.authHeader, json=data)

    def put(self, url, data):
        return requests.put(self.baseUrl + url, headers=self.authHeader, json=data)

    pass
