var host = "http://www.youtube.com/watch?v=";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // return host + video id
        return {redirectUrl: host + details.url.split("/shorts/")[1]};
    },
    {
        urls: [
            "*://www.youtube.com/shorts/*",
            "*://youtube.com/shorts/*",

        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
