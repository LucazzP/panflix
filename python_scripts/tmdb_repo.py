import ast
from itertools import chain

import requests

from localhost_repo import LocalhostRepo


class TMDBRepo:
    token = '607fcf182e5277e9564a6d3980326159'
    authHeader = {"api_key": token}
    baseUrl = 'https://api.themoviedb.org/3'

    def get(self, url, params):
        return requests.get(self.baseUrl + url, params=dict(chain(self.authHeader.items(), params.items())),)

    def getAndSaveMovieIds(self):
        for i in range(681, 1000):
            ids_file = open("ids_movies.txt", "a+")
            r = self.get('/trending/movie/week', {'page': i, 'language': 'pt-BR'})

            for movie in r.json()['results']:
                _id = str(movie['id']) + '\n'
                ids_file.write(_id)

            print(str(i))
            ids_file.close()

    def getMovieDetails(self, id):
        return self.get('/movie/' + id, {'language': 'pt-BR'})

    def getMovieDetailsFromArchive(self, archive):
        ids_file = open(archive, "r")
        ids = ids_file.read().splitlines()
        ids_file.close()

        for _id in ids:
            movies_file = open("movies_details_parsed.txt", "a+")
            r = self.getMovieDetails(_id)
            print(r.status_code)
            try:
                movies_file.write(str(r.json()) + '\n')
            except:
                print("Erro no parse JSON")
            movies_file.close()
            print(_id)

    def readAndPostLocallyMovieDetails(self):
        movies_file = open("movies_details_parsed.txt", "r")
        movies = movies_file.read().splitlines()
        movies_file.close()
        local_repo = LocalhostRepo()

        for movie in movies:
            dic = ast.literal_eval(movie)
            r = local_repo.post('/movies', dic)
            print(r.status_code)

    pass
