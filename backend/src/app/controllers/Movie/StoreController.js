import * as Yup from 'yup';
import Movie from '../../models/Movie';
import Genrer from '../../models/Genrer';
import ProductionCompany from '../../models/ProductionCompany';
import SpokenLanguage from '../../models/SpokenLanguage';
import User from '../../models/User';

class MovieStoreController {
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
            title: Yup.string(),
            video_key: Yup.string()
        });

        // caso algum campo nao esteja preenchido ou a senha tenha menos q 6 digitos da erro
        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json(error);
        }

        if (req.body.id) {
            // verifica se o movie ja existe pelo idTM
            const movieExists = await Movie.findOne({
                where: { id_tmdb: req.body.id }
            });

            // caso o movie ja exista retorna erro
            if (movieExists) {
                return res.status(400).json({ error: 'Movie already exists' });
            }
        }

        // Divide a requisição em variaveis para criar as tables
        const movieJson = req.body;
        movieJson.id_tmdb = movieJson.id;
        delete movieJson.id;

        const { genres } = movieJson;
        delete movieJson.genres;

        const { production_companies } = movieJson;
        delete movieJson.production_companies;

        const { spoken_languages } = movieJson;
        delete movieJson.spoken_languages;

        // Cria o movie table
        const movie = await Movie.create(movieJson);

        // Cria os generos do filme
        if (genres) {
            for (let index = 0; index < genres.length; index++) {
                const g = genres[index];
                const [genrer] = await Genrer.findOrCreate({
                    where: { name: g.name }
                });
                await genrer.addMovie(movie.id);
            }
        }

        // Cria as tables das linguagens do filme
        if (spoken_languages) {
            for (let index = 0; index < spoken_languages.length; index++) {
                const spklan = spoken_languages[index];
                const [slng] = await SpokenLanguage.findOrCreate({
                    where: { name: spklan.name }
                });
                await slng.addMovie(movie.id);
            }
        }

        // Cria as tables das empresas produtoras do filme
        if (production_companies) {
            for (let index = 0; index < production_companies.length; index++) {
                const pcompany = production_companies[index];
                const [pcomp] = await ProductionCompany.findOrCreate({
                    where: {
                        name: pcompany.name,
                        logo_path: pcompany.logo_path
                    }
                });
                await pcomp.addMovie(movie.id);
            }
        }

        // cria o movie via modelo

        // retorna as informacoes do movie
        return res.json({
            message: 'Created',
            id: movie.id
        });
    }

    async favorite(req, res) {
        const { userId } = req;
        const movieId = req.params.movie_id;
        let user;
        let movie;

        try {
            user = await User.findOne({
                where: {
                    id: userId
                },
                include: [
                    {
                        association: 'favoriteMovies'
                    }
                ]
            });
        } catch (error) {
            console.log(error);
        } finally {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
        }

        try {
            movie = await Movie.findByPk(movieId);
        } catch (error) {
            console.log(error);
        } finally {
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
        }

        const ids = user.favoriteMovies.map(movie => movie.id);
        const isAfavoritedMovie = ids.some(id => id == movieId);

        if (isAfavoritedMovie) {
            try {
                await user.removeFavoriteMovies(movieId);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            try {
                await user.addFavoriteMovies(movieId);
            } catch (error) {
                return res.status(400).json(error);
            }
        }

        return res.json({
            message: `Movie ${movieId} ${
                isAfavoritedMovie ? 'unfavorited' : 'favorited'
            } successfully`
        });
    }
}

export default new MovieStoreController();
