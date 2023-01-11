const headerScroll  = document.querySelector('header');
const desigNer  = document.querySelector('.desigNer').textContent;
const progress = document.getElementById('progress');
const headerDesigner = document.getElementById('De-designer');
const sectionTwobackgroung = document.getElementById('section2');



window.addEventListener('scroll', function(e){
   if(this.window.scrollY > 10){
      headerScroll.style.cssText=  `
      -webkit-backdrop-filter: blur(.5rem);
      backdrop-filter: blur(.4rem);
      background: rgba(245, 245, 245, 0.026); transition: all 1s ease`
      headerDesigner.style.cssText = `color: whitesmoke;
      filter: grayscale(30%)sepia(10%); transition: color 1s ease`;
   }else {
      headerScroll.style.cssText=`
      -webkit-backdrop-filter: blur(0rem);
      backdrop-filter: blur(0rem);
      background: transparent;  transition: all 1s ease`
      headerDesigner.style.cssText = `color: whitesmoke;
      filter: grayscale(30%)sepia(10%); transition: color 1s ease`;
   }

   let progresValue = document.documentElement.scrollTop;
   let scrolHeight = document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
   let scrollValue = Math.round(progresValue * 100 / scrolHeight);

   progress.style.cssText=  `background:linear-gradient(to right,  #d2691e ${scrollValue}%,  #c0c0ff5c ${scrollValue}%); transition:  all .10s ease`;

})


