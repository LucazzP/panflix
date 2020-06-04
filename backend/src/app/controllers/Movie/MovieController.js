import MovieDeleteController from './DeleteController';
import MovieStoreController from './StoreController';
import MovieUpdateController from './UpdateController';
import MovieGetController from './GetController';

class MovieController {
    async all(req, res) {
        return MovieGetController.all(req, res);
    }

    async delete(req, res) {
        return MovieDeleteController.delete(req, res);
    }

    async put(req, res) {
        return MovieUpdateController.put(req, res);
    }

    // criar filme
    async store(req, res) {
        return MovieStoreController.store(req, res);
    }

    async index(req, res) {
        return MovieGetController.index(req, res);
    }

    async orderByCreatedDate(req, res) {
        return MovieGetController.orderByCreatedDate(req, res);
    }

    async filter(req, res) {
        return MovieGetController.filter(req, res);
    }

    async favorites(req, res) {
        return MovieGetController.favorites(req, res);
    }

    async favorite(req, res) {
        return MovieStoreController.favorite(req, res);
    }
}

export default new MovieController();
