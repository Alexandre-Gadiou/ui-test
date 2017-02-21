var glob = require("glob");

var viewports = [
  {
    "name": "phone",
    "width": 320,
    "height": 480
  }, {
    "name": "tablet_vertical",
    "width": 768,
    "height": 1024
  }, {
    "name": "tablet_horizontal",
    "width": 1024,
    "height": 768
  }, {
    "name": "desktop_md",
    "width": 1280,
    "height": 800
  }, {
    "name": "desktop_lg",
    "width": 1920,
    "height": 1080
  }
];

// Hide any selectors you don't need
var hideSelectors = [];
// Take out any selectors
var removeSelectors = [];
// Just get look at these selectors
var selectors = ["html"];
var scenariosArray = [];

var htmlFiles = glob.sync("pages/*.html");

// Loop through all *.html pages and push to scenariosArray
htmlFiles.forEach(function(file, i) {
  var filename = file;
  scenariosArray.push({
    "label": filename,
    "url": filename,
    "hideSelectors": hideSelectors,
    "removeSelectors": removeSelectors,
    "selectors": selectors,
    "delay": 500
  });
});


module.exports = {
  "id": "UI Test",
  "viewports": viewports,
  "scenarios": scenariosArray,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "casper_scripts": "backstop_data/casper_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["browser", "CLI"],
  "cliExitOnFail": true,
  "debug": false
}