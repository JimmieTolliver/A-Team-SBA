function populateListings() {

	function Listing(image, address, description, lockbox) {
		this.image = image;
		this.address = address;
		this.description = description;
		this.lockbox = lockbox;
		this.time = null;
		this.selected = false;
	}

	var listing1 = new Listing("./images/test1.jpg", "1234 Main St",
			"cool location", 1234);
	var listing2 = new Listing("./images/test2.jpg", "4321 1st Ave",
			"cool location", 1234);
	var listing3 = new Listing("./images/test3.jpg", "6789 Townsquare",
			"cool location", 1234);
	var listing4 = new Listing("./images/test4.jpg", "9156 Central Ave",
			"cool location", 1234);

	var listingCollection = [ listing1, listing2, listing3, listing4 ];

	// listingCollection.forEach(displayListings);

	// function displayListings() {

	var table = document.getElementById("listings");

	for (var index = 0; index < listingCollection.length; index++) {
		var tableRow = document.createElement("tr");
		var tableData1 = document.createElement("td");
		var image = document.createElement("img");
		var tableData2 = document.createElement("td");
		var tableData3 = document.createElement("td");
		var tableData4 = document.createElement("td");
		var tableData5 = document.createElement("td");
		var checkBox = document.createElement("input")
		var address = document.createTextNode(listingCollection[index].address);
		var description = document.createTextNode(listingCollection[index].description);

		table.appendChild(tableRow);
		tableRow.appendChild(tableData1);
		tableRow.appendChild(tableData2);
		tableRow.appendChild(tableData3);
		tableRow.appendChild(tableData4);
		tableRow.appendChild(tableData5);

		var styleElem = document.head.appendChild(document.createElement("style"));

		styleElem.innerHTML = "td {border: 1px solid black; padding: 20px;}";

		// Need to update the listing object name to match the ones in the
		// array. Should make the list of if's switch cases
		// for (var i = 1; i < listingCollection.length + 1; i++) {

		// console.log(listingCollection.indexOf(listing1));
		// if (i === 1) {
		image.setAttribute("src", listingCollection[index].image);
		image.setAttribute("height", "auto");
		image.setAttribute("width", "70%");
		
		// }
		//			
		// if (i === 2) {
		// image.setAttribute("src", listing2.image);
		// image.setAttribute("height", "300px");
		// image.setAttribute("width", "auto");
		// }
		//			
		// if (i === 3) {
		// image.setAttribute("src", listing3.image);
		// image.setAttribute("height", "300px");
		// image.setAttribute("width", "auto");
		// }
		//			
		// if (i === 4) {
		// image.setAttribute("src", listing4.image);
		// image.setAttribute("height", "300px");
		// image.setAttribute("width", "auto");
		// }

		checkBox.setAttribute("type", "checkbox");
		checkBox.setAttribute("name", "reserve");
		checkBox.setAttribute("value", "true");
		var checkBoxText = document.createTextNode("Schedule this property");
		checkBox.appendChild(checkBoxText);

		// Need to figure out how to pass this info in the if statements so
		// that
		// the same listing.address is not copied on each listing.

		var address = document.createTextNode(listingCollection[index].address);
		var description = document.createTextNode(listingCollection[index].description);

		tableData1.appendChild(checkBox);
		tableData2.appendChild(image);
		tableData3.appendChild(address);
		tableData4.appendChild(description);
	}

	// }
}

function scheduleShowing() {
	// TODO this reads selections on listing.html and uses those selections to
	// populate confirmation.html
}