fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(o=>o.json()).then(function(o){o.forEach(o=>{console.log(o.url)})}).catch(o=>{console.log("error")});
//# sourceMappingURL=index.ea8b0978.js.map
