const { defineConfig } = require("cypress");
const {downloadFile}=require('cypress-downloadfile/lib/addPlugin')
const { allureCypress }=require( "allure-cypress/reporter");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Orange HRM Test result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    
  },
  
    
  
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    "video": true,
    //"videosFolder":"cypress/recordedvideos",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    
    retries: {openMode:2,runMode:1},
    //specPattern: "**/*.feature",
    env:{
      "username":"Admin",
      "password":"admin123",
      "cookievalue":"orangehrm=6302rdmf8ifj46ipejvnjkebja"
    },
    "watchForFileChanges": false,
    setupNodeEvents(on,config){
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task',{downloadFile})
        allureCypress(on, config);
        return config;

       
        
        on("file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin.default(config)],
          }));
          preprocessor.addCucumberPreprocessorPlugin(on, config);
          return config;
    

      
    }
  },
});
