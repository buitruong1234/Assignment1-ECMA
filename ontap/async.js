const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        callback(null, script);
    };
    script.onerror = () => {
        callback(new Error(`Script load error for ${src}`));
    };
    document.head.append(script);
}
loadScript(url, (error, script) => {
    loadScript("b", (script) => {
        loadScript("c", (script) => {
            //...
        });
    });
}); 

setTimeout(() => {
    console.log(1);
}, 3000);
setTimeout(() => {
    console.log(2);
}, 1000);