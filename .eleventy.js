module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy({"node_modules/@exampledev/new.css/new.css": "css/new.css"});
};