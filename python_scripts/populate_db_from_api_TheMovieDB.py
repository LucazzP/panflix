from localhost_repo import LocalhostRepo
from tmdb_repo import TMDBRepo

localRepo = LocalhostRepo()
tmDbRepo = TMDBRepo()

# tmDbRepo.getMovieDetailsFromArchive("ids_movies_filtered.txt")
tmDbRepo.readAndPostLocallyMovieDetails()
