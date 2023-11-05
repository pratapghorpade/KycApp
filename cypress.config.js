const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "mrdd43",
  
  e2e: {

    baseUrl : 'https://stagingapi.goldenpi.com/',
    
    setupNodeEvents(on, config) {
      
    
      
    },
  },
});