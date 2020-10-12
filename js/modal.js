document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openFeedback"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openFeedback').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#closeFeedback"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openFeedback').style.marginLeft = '0px';
  });
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openEntry"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openEntry').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#closeEntry"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openEntry').style.marginLeft = '0px';
  });
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openRegistration"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openRegistration').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#closeRegistration"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openRegistration').style.marginLeft = '0px';
  });
});