const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "1e44cd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reporterDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
    }
  },
});
