const express = require("express");
const router = express.Router();
const projectService = require("../services/projectService");

// Route to create a new project
router.post("/", async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to get a project by id
router.get("/:id", async (req, res) => {
  try {
    const project = await projectService.getProject(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a project
router.put("/:id", async (req, res) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a project
router.delete("/:id", async (req, res) => {
  try {
    const message = await projectService.deleteProject(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all projects
router.get("/", async (req, res) => {
  const {companyId,categoryId} = req.query;
  try {
    const projects = await projectService.getAllProjects(companyId,categoryId);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
