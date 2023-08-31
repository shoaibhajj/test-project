const express = require("express");
const router = express.Router();
const companyService = require("../services/companyService");

// Route to create a new company
router.post("/", async (req, res) => {
  try {
    const company = await companyService.createCompany(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await companyService.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to get a company by id
router.get("/:id", async (req, res) => {
  try {
    const company = await companyService.getCompany(req.params.id);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a company
router.put("/:id", async (req, res) => {
  try {
    const company = await companyService.updateCompany(req.params.id, req.body);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a company
router.delete("/:id", async (req, res) => {
  try {
    const message = await companyService.deleteCompany(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
