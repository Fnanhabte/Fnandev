let InterAnimation = [...document.querySelectorAll('.interAnimation')];
let Inter = [...document.querySelectorAll('.interAnimation1')];
let animWords = [...document.querySelectorAll('.animWords')];
let wrapper= [...document.querySelectorAll('div[data-wrapper="image-wrap"]')];
let lines = [...document.querySelectorAll('.lines')];
let clipPath = [...document.querySelectorAll('.clipPath')];


for(let anim of InterAnimation){
   window.addEventListener('scroll', function(e) {
      InterAnimation =  (this.window.scrollY > 240) ? anim.classList.add('active') : false;
   })
}
for(let inters of Inter){
   window.addEventListener('scroll', function(e) {
     Inter =  (this.window.scrollY > 510) ? inters.classList.add('active') : false;
   })
}
for(let line of lines){
   window.addEventListener('scroll', function(e) {
     lines =  (this.window.scrollY > 510) ? line.classList.add('active') : false;

   })
}


window.addEventListener('scroll', (e) => {
   if(window.scrollY >= 1320){
      wrapper.forEach(wrap => {
         wrap.style.cssText = `

          animation: work 2s cubic-bezier(0,.84,1,.13) forwards 0s;
          transition: animation 1s cubic-bezier(0,.84,1,.13);`
      })
   }
})



let option = {
   rootMargin : '-100px',
   threshold : 0.0
}

let observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.add("active");
         console.log(entry.target)
      }else {
         return;
      }
   })
},option);



animWords.forEach(anim => {
   observer.observe(anim)
})


let observer2 = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         // let wrapper= [...document.querySelectorAll('.work-container')];

         entry.target.classList.add("active");
      }else {
         return;
      }
   })
});

clipPath.forEach(clip => {
   observer2.observe(clip)
})



