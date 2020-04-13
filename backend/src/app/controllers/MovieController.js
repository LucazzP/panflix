import * as Yup from 'yup';
import Movie from '../models/Movie';
import Genrer from '../models/Genrer';
import ProductionCompany from '../models/ProductionCompany';
import SpokenLanguage from '../models/SpokenLanguage';

class MovieController {
    // criar filme
    async store(req, res) {
        // schema do movie
        const schema = Yup.object().shape({
            id: Yup.number(),
            adult: Yup.bool(),
            status: Yup.string(),
            backdrop_path: Yup.string(),
            imdb_id: Yup.string(),
            genres: Yup.array().of(
                Yup.object().shape({
                    id: Yup.number(),
                    name: Yup.string().notRequired()
                })
            ),
            production_companies: Yup.array().of(
                Yup.object().shape({
                    id: Yup.number(),
                    logo_path: Yup.string().notRequired(),
                    name: Yup.string().notRequired()
                })
            ),
            spoken_languages: Yup.array().of(
                Yup.object().shape({
                    name: Yup.string()
                })
            ),
            original_language: Yup.string(),
            original_title: Yup.string(),
            overview: Yup.string(),
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
            res.status(400).json(error);
        }

        // verifica se o movie ja existe pelo idTM
        const movieExists = await Movie.findOne({
            where: { id_tmdb: req.body.id }
        });

        // caso o movie ja exista retorna erro
        if (movieExists) {
            await movieExists.destroy();
            // return res.status(400).json({ error: 'Movie already exists' });
        }

        let movieJson = req.body;
        movieJson.id_tmdb = movieJson.id;
        delete movieJson.id;

        let genres = movieJson.genres;
        delete movieJson.genres;

        let production_companies = movieJson.production_companies;
        delete movieJson.production_companies;

        let spoken_languages = movieJson.spoken_languages;
        delete movieJson.spoken_languages;

        const movie = await Movie.create(movieJson);

        Movie.addScope

        await genres.map(async g => {
            g.movie_id = movie.id;
            const [genrer] = await Genrer.findOrCreate({
                where: { name: g.name }
            });
            await movie.addGenrer(genrer);
        });
        // await spoken_languages.map(async spklan => {
        //     spklan.movie_id = movie.id;
        //     const [slng] = await SpokenLanguage.findOrCreate({
        //         where: { name: spklan.name }
        //     });
        //     await movie.addSpokenLanguage(slng);
        // });
        // await production_companies.map(async pcompany => {
        //     pcompany.movie_id = movie.id;
        //     const [pcomp] = await ProductionCompany.findOrCreate({
        //         where: { name: pcompany.name }
        //     });
        //     await movie.addProductionCompany(pcomp);
        // });

        // return  res.json(movieJson);

        // cria o movie via modelo

        // retorna as informacoes do movie
        return res.json({
            "message": "Created",
            "id": movie.id
        });
    }

    async index(req, res) {
        const { movie_id } = req.params;

        const movie = await Movie.findByPk(movie_id, {
            include: {
                association: 'production_companies'
            }
        });

        'production_companies'
        'spoken_languages'
        'genres'
    }
}

export default new MovieController();
