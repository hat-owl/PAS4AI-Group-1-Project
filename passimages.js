// ==UserScript==
// @name         Image API Caller
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Calls an API for each image on the page
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL of your API
    const apiUrl = 'https://your-api-url.com/endpoint';

    // Function to call the API
    function callApi(imageSrc) {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageUrl: imageSrc })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Get all images on the page
    const images = document.getElementsByTagName('img');
    for (let img of images) {
        callApi(img.src);
    }
})();
