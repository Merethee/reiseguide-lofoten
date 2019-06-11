
$(document).ready(function(){
  
  // tilt effect on image

  var jstilt = document.querySelector('.js-tilt');

  if(jstilt) {
    $('.js-tilt').tilt({
      maxTilt:        10,
      perspective:    2000,   
      easing:         "cubic-bezier(.03,.98,.52,.99)",    
      scale:          1,      
      speed:          200,   
      transition:     true,   
      disableAxis:    null,   
      reset:          true,   
      glare:          false,  
      maxGlare:       1      
    })

    function myFunction(x) {
      if (x.matches) { // If media query matches
        $('.js-tilt').tilt({
          maxTilt:        0
        })
      } else {
        $('.js-tilt').tilt({
          maxTilt:        10,
          perspective:    2000,   
          easing:         "cubic-bezier(.03,.98,.52,.99)",    
          scale:          1,      
          speed:          200,   
          transition:     true,   
          disableAxis:    null,   
          reset:          true,   
          glare:          false,  
          maxGlare:       1      
        })
      }
    }
    
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  }



  // image slider 

  var siema = document.querySelector('.siema');
  
  if(siema) {
    const mySiema = new Siema({
      perPage: {
        768: 2,
        1024: 3,
      },
    });
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());
  }


  $(".info").on("mouseover mouseout",function()
  {                  
    $(".text-info").toggle();
  });

  // remove scroll when hit bottom on page 

  var scroll = document.querySelector('.scroll');
    
  if(scroll) {
    $(window).on("scroll", function() {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
          document.querySelector('.scroll').style.display='none';
      }
    });

  }
});


// video 

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) { // kan lukke video ved å trykke "esc"
    videobox_close();
  }
}

function videobox_open() {
  var videoBoxVideo = document.getElementById("nature-video");
  document.getElementById('video-box').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  videoBoxVideo.play();
}

function videobox_close() {
  var videoBoxVideo = document.getElementById("nature-video");
  document.getElementById('video-box').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  videoBoxVideo.pause();
}



// click on image to get bigger

var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;

for(i=0;i< img.length;i++) {    
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById('fade').style.display = 'block';
  }
}

var span = document.getElementsByClassName("close")[0];

if(span) {
  span.onclick = function() { 
    modal.style.display = "none";
    document.getElementById('fade').style.display = 'none';
  }
}


// ham menu 

var myLinks = document.querySelector("#my-links");
var hamMenu = document.querySelector(".ham-icon");
var closeHam = document.querySelector(".ham-close"); 

hamMenu.addEventListener("click", openMenu);


function openMenu() {
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
    hamMenu.style.display = "none"; 
    closeHam.style.display = "block";
  }
}

closeHam.addEventListener("click", closeMenu);

function closeMenu(){
  if (closeHam.style.display === "block") {
    myLinks.style.display = "none";
    hamMenu.style.display = "block"; 
    closeHam.style.display = "none";
  } else {
    closeHam.style.display = "none";
  }
}


// scroll to top 

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// mouseover info 

var infoIcon = document.querySelector(".info"); 
var infoBox = document.querySelector(".text-info"); 

if(infoIcon) {
  infoIcon.addEventListener("mouseover", hoverForInfo); 
}
if(infoBox) {
  infoBox.addEventListener("mouseout", hoverOutInfo); 
}

function hoverForInfo() {
  infoBox.style.display = "block"; 
  infoIcon.style.display = "none"; 
}

function hoverOutInfo() {
  infoBox.style.display = "none";
  infoIcon.style.display = "block"; 
}