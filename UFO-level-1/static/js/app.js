// Pull in UFO sighting data from data.js
var tableData = data;

// Create a variable to hold table body data
var tbody = d3.select("tbody");

// Loop through each row in the data
data.forEach(function(sighting) {

    // Log each UFO sighting to the console to verify
   console.log(sighting);

   // Append table row for each UFO sighting
   var row = tbody.append("tr");

   // Use Object.entries to console.log each UFO sighting value
   Object.entries(sighting).forEach(function([key, value]) {
       console.log(key,value);

        // Append a cell to the row for each value in UFO sightings
        var cell = row.append("td");

        // Update each cells text with the value
        cell.text(value);
   })
});

