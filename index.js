if (screen.width < 600) {
  document.getElementById("inht").innerHTML = "B.TECH (CHE)";
  document.getElementById("inhtt").innerHTML = "JNTUH-UCEH";
}
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-500px";
}
// google sheet start
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyMuvZ37f_QjMKuTPG4lH5Ryu0KsQ6_07zSKgt9C-1ZTlXb1gGNMEU5zpdFITNUkuo/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully !!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
//google sheet end
// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
});
// <!-- tilt js effect ends -->
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Full Stack Development!!!"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->
/* SCROLL ABOUT */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".Home .container", { delay: 200 });
srtop.reveal(".Home .row h3", { delay: 300 });
srtop.reveal(".Home .row h4", { delay: 400 });
srtop.reveal(".Home .row a .btn", { delay: 500 });
srtop.reveal(".Home .home-col-2 img", { delay: 600 });

srtop.reveal(".About .container", { delay: 300 });
srtop.reveal(".About .about-raw", { delay: 400 });
srtop.reveal(".About .about-col-1", { delay: 300 });
srtop.reveal(".About .about-col-2", { delay: 300 });
srtop.reveal(".About .btn.btn2", { delay: 300 });

srtop.reveal(".Skills .container", { interval: 200 });
srtop.reveal(".Skills .heading h2", { interval: 200 });
srtop.reveal(".Skills .container .skill-bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".edu .container", { interval: 200 });
srtop.reveal(".edu .edu-heading", { interval: 200 });
srtop.reveal(".edu .edu-box", { delay: 200 });

/* SCROLL CONTACT */
srtop.reveal(".contact .cont-container", { delay: 300 });
srtop.reveal(".contact .contt-row", { delay: 400 });
srtop.reveal(".contact .cont-col-1", { delay: 300 });
srtop.reveal(".contact .cont-col-2", { delay: 300 });
srtop.reveal(".contact .btn3", { delay: 300 });
// visibility favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Eportfolio | Md Habeeb";
    $("#favicon").attr("href", "./images/favicon.jpg");
  } else {
    document.title = "Thanks For Your Time..";
    $("#favicon").attr("href", "./images/favbye.png");
  }
});
// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
