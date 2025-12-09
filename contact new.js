// JavaScript Document

//up wala button
  window.addEventListener("scroll", function () {
    const upBtn = document.getElementById("up-btn");
    if (window.scrollY > 300) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  });