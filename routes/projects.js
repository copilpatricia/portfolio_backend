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

// POST route - to create projects

router.post('/', async(req, res) => {
    try {
        const project = await Projects.create(req.body);
        res.status(200).json(project)
    } catch (error) {
        console.log(error)
    }
});

// PUT route - to update the content of a project
router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req.params;
        const updateProject = await Projects.findByIdAndUpdate(id, body, {new: true});
        res.status(200).json(updateProject)
    } catch (error) {
        console.log(error)
    }
});

// DELETE ROUTE - to delete a project 
router.delete('/:id', async(req, res) => {
    try {
       const {id} = req.params;
       const deleteProject = await Projects.findByIdAndDelete(id)
       res.json({msg: "Project deleted", deleteProject})
    } catch (error) {
        console.log(error)
    }
});

export default router;