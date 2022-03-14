import mongoose from "mongoose";

const forum = new mongoose.Schema({
    createDate: { type: String, required: true },
    isAdmin: { type: String, required: true },
    name: { type: String, required: true },
});

const message = new mongoose.Schema({
    createDate: { type: String, required: true },
    message: { type: String, required: true },
    userName: { type: String, required: true },
    forumId: { type: String, required: true },
});

export const Forum = mongoose.model("Forum", forum);
export const Message = mongoose.model("Message", message);
