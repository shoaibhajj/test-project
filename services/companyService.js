const { Company } = require("../models/companyModel");

module.exports = {
  createCompany: async (companyData) => {
    try {
      const company = await Company.create(companyData);
      return company;
    } catch (error) {
      throw new Error("Failed to create company");
    }
  },
  getAllCompanies: async () => {
    try {
      const companies = await Company.findAll();
      return companies;
    } catch (error) {
      throw new Error("Failed to get companies");
    }
  },
  getCompany: async (companyId) => {
    try {
      const company = await Company.findByPk(companyId);
      if (!company) throw new Error("Company not found");
      return company;
    } catch (error) {
      throw new Error("Failed to get company");
    }
  },

  updateCompany: async (companyId, companyData) => {
    try {
      const company = await Company.findByPk(companyId);
      if (!company) throw new Error("Company not found");
      await company.update(companyData);
      return company;
    } catch (error) {
      throw new Error("Failed to update company");
    }
  },

  deleteCompany: async (companyId) => {
    try {
      const company = await Company.findByPk(companyId);
      if (!company) throw new Error("Company not found");
      await company.destroy();
      return { message: "Company deleted successfully" };
    } catch (error) {
      throw new Error("Failed to delete company");
    }
  },
};

