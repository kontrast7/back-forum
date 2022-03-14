import { Message } from "../scheme.js";

class MessageService {
    async create(message) {
        const createdPost = await Message.create(message);
        return createdPost;
    }

    async getAll() {
        const posts = await Message.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error("не указан ID");
        }
        const post = await Message.findById(id);
        return post;
    }
    async getAllMessagesForForum(forumId) {
        if (!forumId) {
            throw new Error("не указан ID");
        }
        const post = await Message.find({ forumId });
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error("не указан ID");
        }

        const updatedPost = await Message.findByIdAndUpdate(post._id, post, {
            new: true,
        });
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error("не указан ID");
        }
        const post = await Message.findByIdAndDelete(id);
        return post;
    }
}

export default new MessageService();
