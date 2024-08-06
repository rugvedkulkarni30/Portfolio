// pythoncss progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 70,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#fca61f ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 60,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// cpp progress circular bar 
let cppProgress = document.querySelector(".cpp"),
  cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
  cppEndValue = 75,
  cppspeed = 30;

let progresscpp = setInterval(() => {
  cppStartValue++;

  cppValue.textContent = `${cppStartValue}%`;
  cppProgress.style.background = `conic-gradient(#20c997 ${
    cppStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (cppStartValue == cppEndValue) {
    clearInterval(progresscpp);
  }
}, cppspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 70,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.getElementById('submit-btn').addEventListener('click', function() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const message = document.getElementById('message').value;

  // Create an object to store the form data
  const formData = {
    name: name,
    email: email,
    mobile: mobile,
    message: message
  };

  // Store the data in localStorage
  localStorage.setItem('contactFormData', JSON.stringify(formData));

  // Log the data to the console
  console.log('Form Data:', formData);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mobile').value = '';
  document.getElementById('message').value = '';
});