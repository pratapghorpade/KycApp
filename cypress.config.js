const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl : 'https://stagingapi.goldenpi.com/',
    
    setupNodeEvents(on, config) {
      
    
      
    },
  },
});