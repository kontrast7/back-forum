import ForumService from "./ForumService.js";

class ForumController {
    async create(req, res) {
        try {
            const post = await ForumService.create(req.body)
            res.json(post)
        } catch (e) {
            console.log(e, req.body)
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await ForumService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await ForumService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await ForumService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await ForumService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ForumController();
