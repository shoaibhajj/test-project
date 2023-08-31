const express = require("express");
const router = express.Router();
const categoryService = require("../services/categoryService");

// Route to create a new category
router.post("/", async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a category by id
router.get("/:id", async (req, res) => {
  try {
    const category = await categoryService.getCategory(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a category
router.put("/:id", async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a category
router.delete("/:id", async (req, res) => {
  try {
    const message = await categoryService.deleteCategory(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
