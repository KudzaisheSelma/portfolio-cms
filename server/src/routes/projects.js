import express from 'express';
import Project from '../models/Project.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ order: 1 });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

router.put('/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
