// import the data from data.js
const tableData=data;
// Reference the HTML table using d3
var tbody=d3.select("tbody");

// Clear the data (create a blank canvas)
function buildTable(data) {
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");


        // Loop Through  Each field in Data Rows
        // We’re telling our code put each sighting onto its own row of data. The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Add filters:
// 
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Set a default filter:
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
      // Rebuild the table using the filtered data
     // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
     buildTable(filteredData);
    }

    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

