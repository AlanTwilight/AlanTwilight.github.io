function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

function myFunction2() {
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (moreText2.style.display === "inline") {
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
}