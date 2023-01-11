const emailH1 = document.getElementById('email');
emailH1.innerHTML = emailH1.textContent.replace(/\S/g, `<span class="active">$&</span>`);
const spans = document.querySelectorAll('span[class=active]')

for(let i = 1; i < spans.length; i++){
  spans[i].style.transform  = "rotate("+i*11.6+"deg)";
 }

const quote = document.getElementById('quote');
quote.innerHTML = quote.innerText.replace(/\S/g, `<em>$&</em>`)
const quoteSpan = document.querySelectorAll('em');
for(let i = 0; i < quoteSpan.length ; i++){
   quoteSpan[i].style.transform = "rotate("+i*13.1+"deg)";
}

