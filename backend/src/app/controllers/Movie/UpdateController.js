import * as Yup from 'yup';
import Movie from '../../models/Movie';

class MovieUpdateController {
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
}

export default new MovieUpdateController();
