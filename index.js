function Delete() {
  try {
    var firstdel = document.getElementsByClassName("deletehidden")[0];
    firstdel.className = "deleteshow";
  } catch {
    var firstdel = document.getElementsByClassName("deleteshow")[0];
    firstdel.className = "deletehidden";
  }
}
function myFunction() {
  var aside = document.getElementsByTagName("aside")[0];
  var main = document.getElementsByTagName("main")[0];

  if (aside.className === "show") {
    aside.className = "hidden";
    main.className = "show";
  } else {
    aside.className = "show";
    main.className = "hidden";
  }
}
