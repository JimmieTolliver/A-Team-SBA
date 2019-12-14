function populateListings() {
	
	function Listing(image, address, description, lockbox) {
		this.image = image;
		this.address = address;
		this.description = description;
		this.lockbox = lockbox;
		this.time = null;
	}

	var listing = new Listing("./images/test.jpg", "1234 Main St", "cool location", 1234); 


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
	
	// End loop
}