// Get the modal
var modal = document.getElementById("myModal");
      
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  var $body = $(document.body);
  $body.css("overflow", "hidden");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  var $body = $(document.body);
  $body.css("overflow", "auto");
  $body.width("auto");  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    var $body = $(document.body);
    $body.css("overflow", "auto");
    $body.width("auto");
  }
}