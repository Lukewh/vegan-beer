var request = new XMLHttpRequest();
var apiUrl = '/api/beers';

request.addEventListener('load', handleRequest, false);
request.open('GET', apiUrl);
request.send();

function handleRequest() {
  console.log(this.responseText);
};
