const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth:1280,
  viewportHeight:800,
  video: true,
  trashAssetsBeforeRuns: true,

  reporter: 'cypress-mochawesome-reporter', //for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for HTML reports
    },
    baseUrl:"https://www.amazon.in/"
  },
});
