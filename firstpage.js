const contactMe = document.getElementById('contactMe');
const inifintText1 = document.querySelector('.infinit-text');
const mainPage = document.getElementById('main-content');
const section2 = document.getElementById('About');
const footer = document.getElementById('Footer');
const LinkToContact = document.getElementById('Con');


contactMe.addEventListener('mouseover', function(e) {
   inifintText1.style.cssText  = `animation: inifinit-text 5s linear infinite;`;
   this.children[0].style.cssText = `border-color: MISTYROSE; transition: border-color .3s linear;`;
});
contactMe.addEventListener('mouseleave', function(e){
   inifintText1.style.cssText  = ``;
   this.children[0].style.cssText = ` transition: border-color .3s linear;`;
})

LinkToContact.addEventListener('click', () => {
   footer.scrollIntoView()
},false)