import Genrer from '../../models/Genrer';
import Movie from '../../models/Movie';

class MovieGetController {
    async index(req, res) {
        const permissions = req.permissions;

        if (permissions < 1) {
            return res.status(401).json({ error: 'User not authorized' });
        }

        const { movie_id } = req.params;

        const movie = await Movie.findByPk(movie_id, {
            include: [
                {
                    association: 'production_companies',
                    attributes: ['id', 'logo_path', 'name'],
                    through: {
                        attributes: []
                    }
                },
                {
                    association: 'spoken_languages',
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                },
                {
                    association: 'genres',
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        return res.json(movie.toJSON());
    }

    async all(req, res) {
        const genders = await Genrer.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    association: 'movies',
                    required: true,
                    attributes: [
                        'id',
                        'backdrop_path',
                        'poster_path',
                        'title',
                        'tagline'
                    ],
                    order: ['popularity', 'DESC'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        // for (let index = 0; index < genders.length; index++) {
        //     genders[index].movies = await genders[index].getMovies({ limit: 10 });
        // }

        return res.json(genders);
    }

    async orderByCreatedDate(req, res) {
        try {
            const movies = await Movie.findAll({
                order: [['release_date', 'DESC'], ['createdAt', 'DESC']],
                attributes: [
                    'id',
                    'backdrop_path',
                    'poster_path',
                    'title',
                    'tagline',
                    'release_date',
                    'createdAt'
                ],
                limit: 50
            });

            return res.json(movies);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new MovieGetController();
