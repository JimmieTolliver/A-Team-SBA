function populateListings() {
	var listing = {
		//Hard coded some test data in the object for now
		image : "./images/test.jpg",
		address : "1234 Main St",
		description : "cool location",
		lockbox : 1234,
		time : "12:30"
	};

	// Start loop
	var table = document.getElementById("listings");
	var tableRow = document.createElement("tr");
	var tableData1 = document.createElement("td");
	var image = document.createElement("img");
	var tableData2 = document.createElement("td");
	var tableData3 = document.createElement("td");
	
	table.appendChild(tableRow);
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);
	tableRow.appendChild(tableData3);
	
	var styleElem = document.head.appendChild(document.createElement("style"));

	styleElem.innerHTML = "td {border: 1px solid black; padding: 20px;}";
	
	image.setAttribute("src", listing.image);
	image.setAttribute("height", "300px");
	image.setAttribute("width", "auto");

	var address = document.createTextNode(listing.address);
	var description = document.createTextNode(listing.description);
	
	tableData1.appendChild(image);
	tableData2.appendChild(address);
	tableData3.appendChild(description);
	
	//End loop
}