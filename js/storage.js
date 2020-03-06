window.onload = function() {

  if (localStorage.getItem("sendnot") == "false") {
    document.getElementById("sendnot").checked = false;
  } else {
    document.getElementById("sendnot").checked = true;
  }

  if (localStorage.getItem("setprof") == "false") {
    document.getElementById("setprof").checked = false;
  } else {
    document.getElementById("setprof").checked = true;
  }

  if (localStorage.getItem("continent") == "Default") {
    document.getElementById("continent").value = "Default";
  } else {
    document.getElementById("continent").value = localStorage.getItem("continent");
  }
};

$("#buttonSave").on("click", function() {

  if (document.getElementById("sendnot").checked) {
    localStorage.setItem("sendnot", "true");
  } else {
    localStorage.setItem("sendnot", "false");
  }

  if (document.getElementById("setprof").checked) {
    localStorage.setItem("setprof", "true");
  } else {
    localStorage.setItem("setprof", "false");
  }

  if (document.getElementById("continent").value != "Default") {
    localStorage.setItem("continent", document.getElementById("continent").value);
  } else {
    localStorage.setItem("continent", "Default");
  }

  document.getElementById("buttonSave").textContent = "Saved ✔";
  document.getElementById("buttonSave").style.background = "#633e85";
  setTimeout(() => {
    document.getElementById("buttonSave").textContent = "Save";
  }, 3000);
  setTimeout(() => {
    document.getElementById("buttonSave").style.background = "#3d5b81";
  }, 3000);

});

$("#buttonDelete").on("click", function() {

  localStorage.setItem("sendnot", "false");
  localStorage.setItem("setprof", "false");
  localStorage.setItem("continent", "Default");
  document.getElementById("sendnot").checked = false;
  document.getElementById("setprof").checked = false;
  document.getElementById("continent").value = "Default";
  document.getElementById("buttonDelete").textContent = "Deleted ✔";
  document.getElementById("buttonDelete").style.background = "#633e85";
  setTimeout(() => {
    document.getElementById("buttonDelete").textContent = "Delete";
  }, 3000);
  setTimeout(() => {
    document.getElementById("buttonDelete").style.background = "#3d5b81";
  }, 3000);
  console.log(document.getElementById("buttonDelete"));
});
