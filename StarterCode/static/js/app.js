// from data.js
var tableData = data;

// Function to build table
for (var i = 0; i < 111; i++) {
  var datetime = data[i].datetime;
  var city = data[i].city;
  var state = data[i].state;
  var country = data[i].country;
  var shape = data[i].shape;
  var comment = data[i].comment;
}

var table = d3.select("#ufo-table");
var tbody = table.select("tbody");
var trow;

function createTable(datetime, city, state, country, shape, comment) {

  for (var i = 0; i < 111; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(data[i].datetime);
    trow.append("td").text(data[i].city);
    trow.append("td").text(data[i].state);
    trow.append("td").text(data[i].country);
    trow.append("td").text(data[i].shape);
    trow.append("td").text(data[i].durationMinutes);
    trow.append("td").text(data[i].comments);
  }
}

createTable(datetime, city, state, country, shape, comment);

// Filter Table button handler
function handleFilter() {
  // Select input value from the form
  var enteredDate = d3.select("#datetime").node().value;
  console.log(enteredDate);
  // console.log(data);

  // Remove existing table
  d3.select("tbody").html("");

  // Prevent refresh
  d3.event.preventDefault();

  // Using filter() to pass the function
  var filteredData = data.filter(record => record.datetime === datetime);
  console.log(filteredData);

  // Display the filtered dataset
  filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
  });


}

// Add event listener for submit button
d3.select("#filter-btn").on("click", handleFilter);
