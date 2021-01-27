// Pull in UFO sighting data from data.js
var tableData = data;

// Create a variable to hold table body data
var tbody = d3.select("tbody");

// Loop through each row in the data
data.forEach(function(sighting) {

   // Append table row for each UFO sighting
   var row = tbody.append("tr");

   // Use Object.entries to store each UFO sighting value
   Object.entries(sighting).forEach(function([key, value]) {
    //    console.log(key,value);

        // Append a cell to the row for each value in UFO sightings
        var cell = row.append("td");

        // Update each cells text with the value
        cell.text(value);
   })
});

// Create variable that holds 'Enter a Date' text/form
var dateForm = d3.select("form");

// Create a variable that will hold 'Filter Table' button
var filterButton = d3.select("#button");

// Create event handlers for clicking the button or pressing the enter key
dateForm.on("submit", runFiltering);
filterButton.on("click",runFiltering);

// Define the function 'runFiltering' using function notation or anonymous notation
function runFiltering() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);
  
    // Now apply the filter 
    var newTableFiltered = tableData.filter(year => year.datetime === inputValue);

    // And display the filtered data on the console
    console.log(newTableFiltered);

    // Clear the table so we can put the filtered table on webpage
    tbody.html("");

    // Loop through each row of data from the filtered table
    newTableFiltered.forEach(function(sighting) {
    
       // Append table row for each UFO sighting
       var row = tbody.append("tr");
    
       // Use Object.entries to console.log each UFO sighting value
       Object.entries(sighting).forEach(function([key, value]) {
    
            // Append a cell to the row for each value in UFO sightings
            var cell = row.append("td");
    
            // Update each cells text with the value
            cell.text(value);
       })
    });
};

