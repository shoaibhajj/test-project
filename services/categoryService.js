const { Category } = require("../models/companyModel");

module.exports = {
    createCategory: async (categoryData) => {
      try {
        const category = await Category.create(categoryData);
        return category;
      } catch (error) {
        throw new Error("Failed to create category");
      }
    },
  
    getCategory: async (categoryId) => {
      try {
        const category = await Category.findByPk(categoryId);
        if (!category) throw new Error("Category not found");
        return category;
      } catch (error) {
        throw new Error("Failed to get category");
      }
    },
  
    updateCategory: async (categoryId, categoryData) => {
      try {
        const category = await Category.findByPk(categoryId);
        if (!category) throw new Error("Category not found");
        await category.update(categoryData);
        return category;
      } catch (error) {
        throw new Error("Failed to update category");
      }
    },
  
    deleteCategory: async (categoryId) => {
      try {
        const category = await Category.findByPk(categoryId);
        if (!category) throw new Error("Category not found");
        await category.destroy();
        return { message: "Category deleted successfully" };
      } catch (error) {
        throw new Error("Failed to delete category");
      }
    },
  
    getAllCategories: async () => {
      try {
        const categories = await Category.findAll();
        return categories;
      } catch (error) {
        throw new Error("Failed to get categories");
      }
    },
  };
  