from localhost_repo import LocalhostRepo
from tmdb_repo import TMDBRepo

localRepo = LocalhostRepo()
tmDbRepo = TMDBRepo()

tmDbRepo.readAndPostLocallyMovieDetails()
# tmDbRepo.get_movie_videos_from_archive()

