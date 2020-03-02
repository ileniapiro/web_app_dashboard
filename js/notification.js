document.getElementById("dropbutton").addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
  $('#dot').css({
        'opacity': 0
    });
});

var closebtns = document.getElementsByClassName("closeX");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});
}
