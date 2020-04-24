import * as Yup from 'yup';
import Movie from '../models/Movie';
import Genrer from '../models/Genrer';
import ProductionCompany from '../models/ProductionCompany';
import SpokenLanguage from '../models/SpokenLanguage';

class MovieController {
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

    async put(req, res) {
        // schema do movie
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            video_key: Yup.string().notRequired(),
            video_site: Yup.string().notRequired(),
            adult: Yup.bool().notRequired(),
            status: Yup.string().notRequired(),
            backdrop_path: Yup.string().notRequired(),
            imdb_id: Yup.string().notRequired(),
            original_language: Yup.string().notRequired(),
            original_title: Yup.string().notRequired(),
            overview: Yup.string().notRequired(),
            popularity: Yup.number().notRequired(),
            poster_path: Yup.string().notRequired(),
            release_date: Yup.date().notRequired(),
            tagline: Yup.string().notRequired(),
            title: Yup.string().notRequired()
        });

        // caso algum campo nao esteja preenchido ou a senha tenha menos q 6 digitos da erro
        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json(error);
        }

        const movie = await Movie.findByPk(req.body.id);

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        try {
            movie.update(req.body);
        } catch (error) {
            return res.status(400).json(error);
        }

        return res.json({ message: 'Movie modified successfully' });
    }

    // criar filme
    async store(req, res) {
        // schema do movie
        const schema = Yup.object().shape({
            id: Yup.number(),
            adult: Yup.bool(),
            status: Yup.string(),
            backdrop_path: Yup.string(),
            imdb_id: Yup.string(),
            genres: Yup.array()
                .of(
                    Yup.object().shape({
                        name: Yup.string()
                            .notRequired()
                            .nullable()
                    })
                )
                .nullable(),
            production_companies: Yup.array()
                .of(
                    Yup.object().shape({
                        logo_path: Yup.string()
                            .notRequired()
                            .nullable(),
                        name: Yup.string()
                            .notRequired()
                            .nullable()
                    })
                )
                .nullable(),
            spoken_languages: Yup.array()
                .of(
                    Yup.object().shape({
                        name: Yup.string().nullable()
                    })
                )
                .nullable(),
            original_language: Yup.string(),
            original_title: Yup.string(),
            overview: Yup.string().max(600),
            popularity: Yup.number(),
            poster_path: Yup.string(),
            release_date: Yup.date(),
            tagline: Yup.string(),
            title: Yup.string()
        });

        // caso algum campo nao esteja preenchido ou a senha tenha menos q 6 digitos da erro
        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json(error);
        }

        // verifica se o movie ja existe pelo idTM
        const movieExists = await Movie.findOne({
            where: { id_tmdb: req.body.id }
        });

        // caso o movie ja exista retorna erro
        if (movieExists) {
            return res.status(400).json({ error: 'Movie already exists' });
        }

        // Divide a requisição em variaveis para criar as tables
        let movieJson = req.body;
        movieJson.id_tmdb = movieJson.id;
        delete movieJson.id;

        let genres = movieJson.genres;
        delete movieJson.genres;

        let production_companies = movieJson.production_companies;
        delete movieJson.production_companies;

        let spoken_languages = movieJson.spoken_languages;
        delete movieJson.spoken_languages;

        // Cria o movie table
        const movie = await Movie.create(movieJson);

        // Cria os generos do filme
        for (let index = 0; index < genres.length; index++) {
            const g = genres[index];
            const [genrer] = await Genrer.findOrCreate({
                where: { name: g.name }
            });
            await genrer.addMovie(movie.id);
        }

        // Cria as tables das linguagens do filme
        for (let index = 0; index < spoken_languages.length; index++) {
            const spklan = spoken_languages[index];
            const [slng] = await SpokenLanguage.findOrCreate({
                where: { name: spklan.name }
            });
            await slng.addMovie(movie.id);
        }

        // Cria as tables das empresas produtoras do filme
        for (let index = 0; index < production_companies.length; index++) {
            const pcompany = production_companies[index];
            const [pcomp] = await ProductionCompany.findOrCreate({
                where: { name: pcompany.name, logo_path: pcompany.logo_path }
            });
            await pcomp.addMovie(movie.id);
        }

        // cria o movie via modelo

        // retorna as informacoes do movie
        return res.json({
            message: 'Created',
            id: movie.id
        });
    }

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
}

export default new MovieController();
