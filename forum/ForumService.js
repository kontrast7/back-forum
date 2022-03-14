import {Forum} from "../scheme.js";

class ForumService {
    async create(forum) {
        const createdPost = await Forum.create(forum);
        return createdPost;
    }

    async getAll() {
        const posts = await Forum.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Forum.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }


        const updatedPost = await Forum.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Forum.findByIdAndDelete(id);
        return post;
    }
}


export default new ForumService();
