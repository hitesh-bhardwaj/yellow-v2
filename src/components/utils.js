// src/utils/splitText.js
import gsap from 'gsap';
import { Expo } from 'gsap';
import SplitType from 'split-type';
import $ from 'jquery'

export function splitInLine(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'lines',
  });
};

export function SplitInLineWordChar(element) {
    if (!element) return null;
    return new SplitType(element, {
      types: 'lines, words, chars',
    });
  }

export function SplitInLineWord(element) {
    if (!element) return null;
    return new SplitType(element, {
      types: 'lines, words',
    });
}

export function SplitInChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'chars',
  });
}

export function SplitInWordChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'words, chars',
  });
}

export function initMagneticButton() {
    var magnets = document.querySelectorAll('[data-magnetic-target]');
    
    if(window.innerWidth > 1024){
       
       magnets.forEach((magnet) => {
          magnet.addEventListener('mousemove', moveMagnet );
          magnet.addEventListener('mouseleave', function(event) {
             gsap.to( $(event.currentTarget).find('.magnetic-inner'), 1.4, {
                x: 0, 
                y: 0, 
                ease: Expo.easeOut
             });    
          });
       });
 
       function moveMagnet(event) {
          var magnetButton = event.currentTarget;
          var bounding = magnetButton.getBoundingClientRect();
          var magnetsStrength = magnetButton.getAttribute("data-magnetic-strength");
          
          if($(event.currentTarget).parent().hasClass('hover')) {
             gsap.to($(magnetButton).find('.magnetic-inner'), 1, {
                x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
                y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
                rotate: "0.001deg",
                ease: Expo.easeOut
             });
          } else {
             gsap.to($(magnetButton).find('.magnetic-inner'), 1.4, {
                x: (event.clientX - bounding.left) - (bounding.width / 2),
                y: (event.clientY - bounding.top) - (bounding.height / 2),
                rotate: "0.001deg",
                ease: Expo.easeOut
             }); 
          }
 
       }
    }
 }