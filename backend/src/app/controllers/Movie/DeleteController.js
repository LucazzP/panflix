import Movie from '../../models/Movie';

class MovieDeleteController {
    async delete(req, res) {
        const { movie_id } = req.params;

        const movie = await Movie.findByPk(movie_id);

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        try {
            movie.destroy();
        } catch (error) {
            return res.status(400).json(error);
        }

        return res.json({ message: 'Movie deleted' });
    }
}

export default new MovieDeleteController();
