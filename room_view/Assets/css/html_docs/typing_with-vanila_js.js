const typedTextSpan= document.querySelector(".typed-text");
const textArray = ["the", "tool", "that can", "change", "the", "world"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const cursorspan = document.querySelector(".cursor");
function type(){
         if(charIndex  < textArray[textArrayIndex].length){
                  if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
                  typedTextSpan.textContent +=  textArray[textArrayIndex].charAt(charIndex);
                  charIndex ++;
                  setTimeout(type, typingDelay);
         }
         else{
                  
                  cursorspan.classList.remove("typing");
                  setTimeout(erase, newTextDelay);
         }
}


// erasing section
function erase(){
                  if(charIndex > 0){
                  if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
                  typedTextSpan.textContent =  textArray[textArrayIndex].substring(0, charIndex-1)
                  charIndex--;
                  setTimeout(erase,  erasingDelay);
         } else{
                  cursorspan.classList.remove("typing"); 
                  textArrayIndex++;
                  if(textArrayIndex>= textArray.length) textArrayIndex = 0;
                  setTimeout(type, typingDelay + 1100);
         }
}

document.addEventListener('DOMContentLoaded', function(){
         setTimeout(type, newTextDelay);
});