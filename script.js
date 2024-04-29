
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

   
    let viewDetails=(Element)=>{
      let parentDiv=Element.parentElement.parentNode.parentNode.parentNode.parentNode;
      console.log(parentDiv)
      let pText=parentDiv.querySelector('.p-text');
      // console.log(pText)
      pText.classList.toggle('show')

      let minus=parentDiv.querySelector('.minus');

      let plus=parentDiv.querySelector('.plus');
      plus.classList.add('hide')
      plus.classList.remove('show')

      minus.classList.add('show')
      minus.classList.remove('hide')

      parentDiv.classList.add('show')

     let parentImg=parentDiv.querySelector('img');
     parentImg.style.height=158+'px';
    }
    let hideDetails=(Element)=>{
      let parentDiv=Element.parentElement.parentNode.parentNode.parentNode.parentNode;

      let pText=parentDiv.querySelector('.p-text');
      console.log(pText)
      pText.classList.toggle('show')

      let minus=parentDiv.querySelector('.minus');

      let plus=parentDiv.querySelector('.plus');

      minus.classList.add('hide')
      minus.classList.remove('show')

      plus.classList.add('show')
      plus.classList.remove('hide')

      
      parentDiv.classList.remove('show')

      let parentImg=parentDiv.querySelector('img');
     parentImg.style.height=300+'px';
    }

    function btnText(){
      let selectedExam = document.getElementById('examSelect').value;
      let examBtn = document.getElementById('examBtn');
      examBtn.innerText=`VISIT ${selectedExam}`;

    }
    function register(){
      let exam = document.getElementById("examSelect").value;
      let registrationLink;
      switch (exam){
        case "WAEC":
          registrationLink="https://www.waec.org/";
          break;
        case "JAMB":
            registrationLink="https://www.jamb.gov.ng/";
            break;
        case "GCE":
          registrationLink="https://www.waecdirect.org/";
          break;
        case "NECO":
          registrationLink="https//www.neco.gov.ng/";
          break;
        case "IJMB":
          registrationLink="https:www.ijmb.org.ng/";
          break;
          default:  
          registrationLink="#"

      }
      // to open the registration link in new tab
      window.open(registrationLink, "_blank")
    }

// end

//when scrolling active nav link indicating the section
 let windowTop=window.scrollY;

let linkShowPage=()=>{
  let sections = document.querySelectorAll("body .section");
  let allNavLinks=document.querySelectorAll('.landing-page nav ul li a');
  let windowTop=window.scrollY;
  
  sections.forEach( section=>{
    let sectionTop=section.offsetTop-200;
    let sectionHeight=section.offsetHeight;
    let Id = section.getAttribute('id');
    if(windowTop>sectionTop && windowTop<sectionTop + sectionHeight){
      allNavLinks.forEach( 
        
        aLINK=>{
        aLINK.classList.remove('active');
        
        // let activeLink=document.querySelector('nav ul li a[href*="'+Id+'"]');
        let ActiveLink=document.querySelector('.landing-page nav ul li a[href*="'+Id+'"]')
        ActiveLink.classList.add('active');
    
      } )
    }

  } )

}
window.addEventListener('scroll',linkShowPage);



// end

let navList=document.querySelector('nav ul')


let hamburger = document.getElementById('hamburger')

let links=document.querySelectorAll('a');

function toggleUL(){

  navList.classList.toggle('display-ul');
document.querySelector('#hamburger').classList.toggle('hamburger-border'); 
}

links.forEach((link)=>{
link.addEventListener('click',()=>{
  // link.preventDefault()
  // toggleUL();
  if(navList.classList.contains('display-ul')){
     navList.classList.remove('display-ul')

  }
 
  

})

}) 
// script for contact page form validation

  function valid(){
    // let validEmail= new RegExp('^.+@.+\..+$');
    // let isValidEmail=validEmail.test(document.form.email.value)
    if(document.form.name.value==""){
      document.getElementById('error').innerHTML="Enter your name*";
      return false;
    }
    else if(document.form.email.value==""){
      document.getElementById('error').innerHTML="Enter your Email*";
      return false;
    }
    else if(!isValidEmail){
      document.getElementById('error').innerHTML="Enter valid Email*";
      return false;
    }
    else if(document.form.tel.value==""){
      document.getElementById('error').innerHTML="Enter your telephone num*";
      return false;
    }
    else if(document.form.tel.value!==NaN){
      document.getElementById('error').innerHTML="Enter your telephone num*";
      return false;
    }
    else if(document.form.comment.value==""){
      document.getElementById('error').innerHTML="Please leave a comment*";
      return false;
    }
  }

// script for facilities section

let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let slides = document.querySelectorAll('.image-list .slide')
let slideContainer = document.querySelector('.image-list')
let indicators = document.querySelectorAll('.indicators span');

indexValue=0;

function slideFunction(){
  slides.forEach( slideImg=>{
    slideImg.classList.remove('show')
  } )

  // add for indicator here
  indicators.forEach(  indicator=>{
    indicator.classList.remove('active')
  } );

  indexValue++;

  if(indexValue>slides.length-1){
    indexValue=0;
  }
  // add for indicator here
  if(indexValue>indicators.length-1){
    indexValue=0;
  }

  slides[indexValue].classList.add('show');
  // add for indicator here
  indicators[indexValue].classList.add('active')
}
// slideFunction()
nextBtn.onclick=()=>{
slideFunction()
clearInterval(slideID);

// add for indicator too
}
// to stop slide process on mouseover
slideContainer.onmouseover=()=>{
  clearInterval(slideID);
}


prevBtn.onclick=()=>{
  slides.forEach( slideImg=>{
    slideImg.classList.remove('show')
  } )

  // add for indicator here
  indicators.forEach(  indicator=>{
    indicator.classList.remove('active')
  } );

  indexValue--;

  if(indexValue<0){
    indexValue=slides.length-1;
  }
  // add for indicator here
  if(indexValue<0){
    indexValue=indicators.length-1;
  }

  slides[indexValue].classList.add('show');
  // add for indicator here
  indicators[indexValue].classList.add('active')
  clearInterval(slideID);

}
let slideID;
// auto slide 
let slideAutoFunction=()=>{
  slideID=setInterval( slideFunction,3000 );
}
slideAutoFunction();
// on mouveover stop auto slide
  
  slideContainer.addEventListener('mouseover',()=>{
    clearInterval(slideID);
    nextBtn.style.display='block';
    prevBtn.style.display='block';
  
  })
// on mouveout restart auto slide
  
  slideContainer.addEventListener('mouseout',()=>{
    slideAutoFunction();
    nextBtn.style.display='none';
    prevBtn.style.display='none';
    
  })
  
// end of facilities section script




