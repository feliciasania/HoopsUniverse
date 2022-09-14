// ------------------ header ------------------
function Header() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsivenav";
  } else {
    x.className = "topnav";
  }
}