

//exclude row if date is not after (ie is less than) the date typed
function dateAfter() {
   
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("date-after");
  filter = Number(input.value)
  table = document.getElementById("mss-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
	
	//get first four digits of the date
    td = Number(td.innerHTML.substring(0, 4))
	console.log(td)
	if (td) {
      if (td > filter) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function dateBefore() {
   
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("date-before");
  filter = Number(input.value)
  table = document.getElementById("mss-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
	
	//get first four digits of the date
    td = Number(td.innerHTML.substring(0, 4))
	console.log(td)
	if (td) {
      if (td < filter) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}