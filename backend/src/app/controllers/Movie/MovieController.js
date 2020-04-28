import MovieDeleteController from './DeleteController.js';
import MovieStoreController from './StoreController.js';
import MovieUpdateController from './UpdateController.js';
import MovieGetController from './GetController.js';

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
}

export default new MovieController();
