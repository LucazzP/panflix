from localhost_repo import LocalhostRepo
from tmdb_repo import TMDBRepo

localRepo = LocalhostRepo()
tmDbRepo = TMDBRepo()

# tmDbRepo.getMovieDetailsFromArchive("ids_movies_filtered.txt")
tmDbRepo.get_movie_videos_from_archive()
