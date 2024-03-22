import {Router} from 'express';
import Projects from '../models/projects.js';

const router = new Router();

// GET route - returns all projects
router.get('/', async(req, res) => {
    try {
        const projects = await Projects.find({});
        res.status(200).json(projects)
    }catch(error) {
        console.log(error)
    }
});

// GET/:id route - returns a single project selected by id
router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const project = await Projects.findById(id);
        res.status(200).json(project)
    }catch(error){
        console.log(error);
        res.json({msg: "Project not found!"})
    }
});

