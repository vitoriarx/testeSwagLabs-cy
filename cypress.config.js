
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://www.saucedemo.com/v1/',
    testIsolation: false 
  },

});
