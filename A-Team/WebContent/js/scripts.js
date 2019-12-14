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
	var tableData4 = document.createElement("td");
	var checkBox = document.createElement("input")
	
	table.appendChild(tableRow);
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);
	tableRow.appendChild(tableData3);
	tableRow.appendChild(tableData4);
	
	var styleElem = document.head.appendChild(document.createElement("style"));

	styleElem.innerHTML = "td {border: 1px solid black; padding: 20px;}";
	
	image.setAttribute("src", listing.image);
	image.setAttribute("height", "300px");
	image.setAttribute("width", "auto");
	
	checkBox.setAttribute("type", "checkbox");
	checkBox.setAttribute("name", "reserve");
	checkBox.setAttribute("value", "true");
	var checkBoxText = document.createTextNode("Schedule this property");
	checkBox.appendChild(checkBoxText);

	var address = document.createTextNode(listing.address);
	var description = document.createTextNode(listing.description);
	
	tableData1.appendChild(checkBox);
	tableData2.appendChild(image);
	tableData3.appendChild(address);
	tableData4.appendChild(description);
	
	// End loop
}