function Delete(ele) {
  // var total=document.getElementsByClassName
  var temp = document.getElementsByClassName(ele.id)[0];
  var temp2 = document.getElementsByClassName(ele.id)[1];
  if (temp.className == "deletehidden " + ele.id) {
    temp.className = "deleteshow " + ele.id + " pop";
    temp2.className = "deleteshow " + ele.id;
  } else {
    temp.className = "deletehidden " + ele.id;
    temp2.className = "deletehidden " + ele.id;
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
