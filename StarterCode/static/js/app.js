// from data.js
var tableData = data;

// YOUR CODE HERE!
// Function to build table
for (var i = 0; i < 111; i++) {
  var datetime = data[i].datetime;
  var city = data[i].city;
  var state = data[i].state;
  var country = data[i].country;
  var shape = data[i].shape;
  var comment = data[i].comment;
}

function createTable(datetime, city, state, country, shape, comment) {
  var table = d3.select("#ufo-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 12; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(datetime);
    trow.append("td").text(city);
    trow.append("td").text(state);
    trow.append("td").text(country);
    trow.append("td").text(shape);
    trow.append("td").text(comment);
  }
}

createTable(datetime, city, state, country, shape, comment);
