
// preloader script
window.addEventListener('load',()=>{
  setTimeout(preloaderFunction,1500)
  // this is for program section
  let plus=document.querySelectorAll('.plus')
  let minus=document.querySelectorAll('.minus');
  plus.forEach(Element=>{
    Element.setAttribute('onclick','viewDetails(this)')
  })
  minus.forEach(Element=>{
    Element.setAttribute('onclick','hideDetails(this)')
  })
})
let preloaderFunction=()=>{
  let preloader = document.querySelector('.preloader-container');
  preloader.style.display='none';
  // preloader.style.visibility="hidden"
  document.querySelector("body .container").style.display='block';
  // document.querySelector("body .container").style.visibility='visible';
}

// end
// script for program page

   
