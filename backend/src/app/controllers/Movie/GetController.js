/* eslint-disable valid-typeof */
import https from 'https';
import { Op } from 'sequelize';

import Genrer from '../../models/Genrer';
import Movie from '../../models/Movie';
import User from '../../models/User';

class MovieGetController {
    async index(req, res) {
        const { permissions } = req;

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

        if (!movie.video_key) {
            try {
                https.get(
                    `https://api.themoviedb.org/3/movie/${movie.id_tmdb}/videos?api_key=607fcf182e5277e9564a6d3980326159&language=pt-BR`,
                    response => {
                        response.on('data', function(chunk) {
                            try {
                                movie.video_key = JSON.parse(
                                    chunk
                                ).results[0].key;
                            } catch (e) {}
                        });
                    }
                );
            } catch (e) {}
        }
        return res.json(movie);
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
                order: [
                    ['release_date', 'DESC'],
                    ['createdAt', 'DESC']
                ],
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

    async favorites(req, res) {
        try {
            const { userId } = req;

            const user = await User.findByPk(userId, {
                attributes: [],
                include: [
                    {
                        association: 'favoriteMovies',
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

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.json(user.favoriteMovies);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async filter(req, res) {
        const findAll = {
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
                        'tagline',
                        'release_date'
                    ],
                    order: ['popularity', 'DESC'],
                    through: {
                        attributes: []
                    }
                }
            ]
        };

        let ano;
        let anonext;
        if (req.query.ano) {
            ano = new Date(req.query.ano);
            const anoNextNumber = parseInt(req.query.ano) + 1;
            anonext = new Date(anoNextNumber.toString());
        }
        const { title } = req.query;
        const { gender } = req.query;

        if (gender) {
            findAll.where = {
                [Op.or]: [
                    { name: { [Op.like]: `%${gender}%` } },
                    { name: { [Op.like]: `${gender}%` } },
                    { name: { [Op.like]: `%${gender}` } },
                    { name: { [Op.like]: `${gender}` } }
                ]
            };
        }
        if (title && !ano) {
            findAll.include[0].where = {
                [Op.or]: [
                    { title: { [Op.like]: `%${title}%` } },
                    { title: { [Op.like]: `${title}%` } },
                    { title: { [Op.like]: `%${title}` } },
                    { title: { [Op.like]: `${title}` } }
                ]
            };
        }
        if (ano && !title) {
            findAll.include[0].where = {
                [Op.and]: [
                    { release_date: { [Op.gte]: `${ano}` } },
                    { release_date: { [Op.lte]: `${anonext}` } }
                ]
            };
        }
        if (ano && title) {
            findAll.include[0].where = {
                [Op.and]: [
                    {
                        [Op.or]: [
                            { title: { [Op.like]: `%${title}%` } },
                            { title: { [Op.like]: `${title}%` } },
                            { title: { [Op.like]: `%${title}` } },
                            { title: { [Op.like]: `${title}` } }
                        ]
                    },
                    { release_date: { [Op.gte]: `${ano}` } },
                    { release_date: { [Op.lte]: `${anonext}` } }
                ]
            };
        }

        try {
            const genders = await Genrer.findAll(findAll);

            return res.json(genders);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new MovieGetController();
