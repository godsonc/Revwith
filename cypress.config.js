const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://europa-sandbox.revwit.com/onboarding',
    viewportHeight: 1000,
    defaultCommandTimeout: 30000,
    viewportWidth: 1500,
    experimentalStudio: true,
    // force: true,
    // waitForAnimations: true,


  },
});
