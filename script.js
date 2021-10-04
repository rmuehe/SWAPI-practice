// https://howtocreateapps.com/fetch-and-display-json-html-javascript/

fetch("https://swapi.dev/api/films/")
  .then(function (response) {

    // https://stackoverflow.com/questions/51781137/how-can-i-handle-error-404-in-async-await-fetch-api

    // if (response.status === 200) {
        return response.json();
    // } else {
            // fetch("https://www.swapi.tech/api/films")
            //// this alternate API has different data
            //     .then(function (response) {
            //         return response.json(); //...
                     
    // }
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });



//// Turn the Episodes into buttons.

//// renders HTML of the opening Crawl after an episode is clicked
function openCrawl(indexNum) {
    mainContainer = document.getElementById("myData");
    var p = document.createElement("p");

    fetch("https://swapi.dev/api/films/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            p.innerText = data.results[indexNum].opening_crawl;
            mainContainer.appendChild(p);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.results.length; i++) {
        // append each title to our page
        var button = document.createElement("button");
        button.innerText = "Episode " 
            + data.results[i].episode_id 
            + ': ' + data.results[i].title;
        button.setAttribute("type", "button");
        button.setAttribute("onclick", `openCrawl(${i});`)

        mainContainer.appendChild(button);
        
        // var p = document.createElement("p");
        // p.innerHTML = data.results[i].opening_crawl;
        // mainContainer.appendChild(p);
    }
}

