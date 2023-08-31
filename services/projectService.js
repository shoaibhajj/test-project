const { Project, Category } = require("../models/companyModel");

module.exports = {
    createProject: async (info) => {
        try {
          let {categoryIds, ...projectData}  = info
          const project = await Project.create(projectData);
          project.setCategories(categoryIds)  
          return project;
        } catch (error) {
          throw new Error("Failed to create project");
        }
      },
  
    getProject: async (projectId) => {
      try {
        const project = await Project.findByPk(projectId,{
            include: [{
              model: Category,
              through: { attributes: [] }
            }]
        });
        if (!project) throw new Error("Project not found");

        return project;
      } catch (error) {
        throw new Error("Failed to get project");
      }
    },
  
    updateProject: async (projectId, info) => {
        let {categoryIds, ...projectData}  = info;
      try {
        const project = await Project.findByPk(projectId);
        if (!project) throw new Error("Project not found");
      const  newProject = await project.update(projectData);
       
      newProject.setCategories(categoryIds)  
     
        return newProject;
      } catch (error) {
        throw new Error("Failed to update project");
      }
    },
  
    deleteProject: async (projectId) => {
      try {
        const project = await Project.findByPk(projectId);
        if (!project) throw new Error("Project not found");
        await project.destroy();
        return { message: "Project deleted successfully" };
      } catch (error) {
        throw new Error("Failed to delete project");
      }
    },
  
    getAllProjects: async (companyId, categoryId) => {
      try {
        let filterOptions = {};
    
        if (companyId) {
          filterOptions = { ...filterOptions, CompanyId: companyId };
        }
        const includeOptions = [];
        if (categoryId) {
          includeOptions.push({ model: Category, through: 'CategoryProjects', where: { id: categoryId } });
        }
        const projects = await Project.findAll({
          where: filterOptions,
          include: includeOptions,
        });
    
        return projects;
      } catch (error) {
        throw new Error("Failed to get projects");
      }
    }
    
  };
  