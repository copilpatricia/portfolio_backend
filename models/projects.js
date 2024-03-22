import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    description: {
        type: String,
        minLength: 10
    },

    image: {
        type: String,
    },

    technologies: {
        type: Array,
        default: []
    },

    site: {
        type: String,
    },

    code: {
        type: String
    }
});

export default mongoose.model('Projects', projectsSchema)