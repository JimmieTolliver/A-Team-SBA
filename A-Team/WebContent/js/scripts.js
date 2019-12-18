function populateListings() {

  function Listing(image, address, description, lockbox) {
    this.image = image;
    this.address = address;
    this.description = description;
    this.lockbox = lockbox;
    this.time = "null";
    this.selected = false;
  }

  var listing1 = new Listing("./images/test1.jpg", "1234 Main St",
    "cool location", 1325);
  var listing2 = new Listing("./images/test2.jpg", "4321 1st Ave",
    "cool location", 2145);
  var listing3 = new Listing("./images/test3.jpg", "6789 Townsquare",
    "cool location", 4532);
  var listing4 = new Listing("./images/test4.jpg", "9156 Central Ave",
    "cool location", 5567);

  var listingCollection = [listing1, listing2, listing3, listing4];

  var table = document.getElementById("listings");

  for (var index = 0; index < listingCollection.length; index++) {
    var tableRow = document.createElement("tr");
    var tableData1 = document.createElement("td");
    var image = document.createElement("img");
    var tableData2 = document.createElement("td");
    var tableData3 = document.createElement("td");
//    var tableData4 = document.createElement("td");
    var tableData5 = document.createElement("td");
    var checkBox = document.createElement("input")
    var address = document.createTextNode(listingCollection[index].address);
    var description = document.createTextNode(listingCollection[index].description);

    table.appendChild(tableRow);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    //tableRow.appendChild(tableData4);
    tableRow.appendChild(tableData5);

    var styleElem = document.head.appendChild(document.createElement("style"));

//    styleElem.innerHTML = "th {text-align:center;}";
    styleElem.innerHTML = "td {padding-bottom:20px; text-align:center;}";

    image.setAttribute("src", listingCollection[index].image);
    image.setAttribute("height", "auto");
    image.setAttribute("width", "70%");
    
//    tableData1.setAttribute("padding:0");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "reserve");
    // checkBox.setAttribute("value", "checked");
    var checkBoxText = document.createTextNode("Schedule this property");
    checkBox.appendChild(checkBoxText);

    var address = document.createTextNode(listingCollection[index].address);
    var description = document.createTextNode(listingCollection[index].description);

    tableData1.appendChild(checkBox);
    tableData2.appendChild(image);
    tableData3.appendChild(address);
    //tableData4.appendChild(description);

    // Add dropdown menu with times
    tableData5.setAttribute("id", "times");

    var div = document.getElementById("times");
    var select = document.createElement("select");

    div.appendChild(select);

    var option1 = document.createElement("option");
    var text1 = document.createTextNode("12:00 PM");
    select.appendChild(option1);
    option1.appendChild(text1);
    option1.setAttribute("value", "12:00 PM");
    option1.setAttribute("name", "time");

    for (var i = 1; i < 7; i++) {
      var option = document.createElement("option");
      var setTime = i + ":00 PM";
      var text = document.createTextNode(setTime);
      select.appendChild(option);
      option.appendChild(text);
      option.setAttribute("value", i + ":00PM");
      option.setAttribute("name", "time");
    }

    tableData5.appendChild(select);
  }

  localStorage.setItem('listingCollection', JSON.stringify(listingCollection));

}

function populateShowings() {
  var table = document.getElementById("listings");

  var retrievedObject = localStorage.getItem('listingCollection');
  var listings = JSON.parse(retrievedObject);
  // console.log('retrievedObject: ', JSON.parse(retrievedObject));

  var checked = document.getElementsByName("reserve");
  var checkedListings = [];

  for (var i = 0; i < listings.length; i++) {
    if (checked[i].checked) {
      for (var j = 0 + i * 7; j < 7 + i * 7; j++) {
        if (document.getElementsByName("time")[j].selected) {
          listings[i].time = document.getElementsByName("time")[j].textContent;
        }
      }
      checkedListings.push(listings[i]);
    }
  }
  ////////////////////////////NEW OLD STUFF

  var table = document.getElementById("listings");

  //REMOVE CHILD
  var list = document.querySelector("table");
  var child = list.lastElementChild;
  while (child) {
    list.removeChild(child);
    child = list.lastElementChild;
  }
  
  //Add column headers
  var tableHeaderRow = document.createElement("tr");
  var tableHeader1 = document.createElement("th");
  var tableHeader2 = document.createElement("th");
  var tableHeader3 = document.createElement("th");
  var addressHeader = document.createTextNode("Address");
  var timeHeader = document.createTextNode("Scheduled Time");
  var lockboxHeader = document.createTextNode("Lock Box Code");
  
  // adding attributes when building the DOM
  var att = document.createAttribute("class");
  att.value = "confirm-table";
//  var thStyle = document.getElementsByTagName("th")[0];
  tableHeaderRow.setAttributeNode(att);
  
  table.appendChild(tableHeaderRow);
  tableHeaderRow.appendChild(tableHeader1);
  tableHeader1.appendChild(addressHeader);
  tableHeaderRow.appendChild(tableHeader2);
  tableHeader2.appendChild(timeHeader);
  tableHeaderRow.appendChild(tableHeader3);
  tableHeader3.appendChild(lockboxHeader);
  

  for (var index = 0; index < checkedListings.length; index++) {
    var tableRow = document.createElement("tr");
    var tableData2 = document.createElement("td");
    var tableData3 = document.createElement("td");
    var tableData4 = document.createElement("td");
    var address = document.createTextNode(checkedListings[index].address);
    var time = document.createTextNode(checkedListings[index].time);

    table.appendChild(tableRow);

    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = "th, td {padding-right: 20px;}";

    var address = document.createTextNode(checkedListings[index].address);
    var lockbox = document.createTextNode(checkedListings[index].time);
    var lockbox = document.createTextNode(checkedListings[index].lockbox);

    tableData2.appendChild(address);
    tableData3.appendChild(time);
    tableData4.appendChild(lockbox);

  }

  // console.log(checkedListings);
  
  var element = document.getElementById("button");
  element.parentNode.removeChild(element);

  localStorage.clear();
}

function sendMessage() {
	  var name = document.getElementById("fname").value;
	  alert("Thank you " + name + "! Your message has been sent!");
	}