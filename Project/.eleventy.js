// Author: Jakob Olive, 
// Date: 2024-11-08
// This file is the eleventyConfig file that exports all the needed modules and images, this file also exports the slugify function 
// used in the products_info.njk page. 

module.exports = function(eleventyConfig) {
    // Copy Bootstrap CSS and JS from node_modules to the output directory
    eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist/css/bootstrap.min.css");
    eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"); 
    eleventyConfig.addPassthroughCopy("./src/images");
   
// Defining and exporting the slugify function that will basically transform any string into something that can be used as a URL.
const slugify = require("slugify");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("slugify", function(value) {
    return slugify(value, {
      lower: true, // Converts to lowercase
      strict: true, // Removes special characters
      remove: /[*+~.()'"!:@]/g // Optionally remove more characters
    });
  });
}; 

// Returning the input and output so the Eleventy can operate.
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}