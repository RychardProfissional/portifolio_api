class commentsController {
    static getAll(req, res) {
        res.status(200).send([]);
    }

    static create(req, res) {
        res.status(201).send({ message: 'Create a new comment' });
    }

    static getById(req, res) {
        const {id} = req.params
        res.status(200).send({ comment: { id: Number(id) } });
    }

    static update(req, res) {
        const {id} = req.params
        res.status(200).send({ message: `Update comment with ID ${id}` });
    }

    static delete(req, res) {
        const {id} = req.params
        res.status(204).send({ message: `Delete comment with ID ${id}` });
    }
}

module.exports = commentsController
