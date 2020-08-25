function Delete(ele) {
  // var total=document.getElementsByClassName
  var temp = document.getElementsByClassName(ele.id)[1];
  var temp2 = document.getElementsByClassName(ele.id)[2];
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

function State(ele) {
  var id = ele.parentElement.parentElement.children[0].children[0].id;
  var parent = ele.parentElement.parentElement;

  if (parent.className == "item notdone " + id) {
    parent.className = "item done " + id;
  } else {
    parent.className = "item notdone " + id;
  }
}

function removeElement(ele) {
  // Removes an element from the document
  var parent = ele.parentNode;
  var gparent = parent.parentNode;
  var id = parent.className.split(" ")[1];
  var temp = document.getElementsByClassName(id)[0];
  gparent.removeChild(temp);

  gparent.removeChild(parent);
}
