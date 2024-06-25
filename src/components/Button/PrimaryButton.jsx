import { useEffect, useRef } from "react";
import gsap from "gsap";
import $ from 'jquery';
import { Power2 } from "gsap";

const PrimaryButton = ({className = "", onClick, text }) => {

  useEffect(()=> {
    $('.btn-hover').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });

    $('.btn-hover').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });
  }, [])

  useEffect(()=> {
    const all_btns = gsap.utils.toArray(".btn_wrapper");
    if (all_btns.length > 0) {
      var all_btn = gsap.utils.toArray(".btn_wrapper");
    }
    else {
      var all_btn = gsap.utils.toArray("#btn_wrapper");
    }
    const all_btn_cirlce = gsap.utils.toArray(".btn-item");
    all_btn.forEach((btn, i) => {
      $(btn).mousemove(function (e) {
        callParallax(e);
      });
      function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 50);
      }
  
      function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
  
        gsap.to(target, 0.1, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.in,
        });
      }
      $(btn).mouseleave(function (e) {
        gsap.to(all_btn_cirlce[i], 0.1, {
          x: 0,
          y: 0,
          ease: Power2.in,
        });
      });
    });
  }, []);

  return (
    <div className="btn_wrapper">
      <button aria-label="Play Showreel" onClick={onClick} className={`btn-white btn-hover btn-item ${className}`}>
        <span></span>
            {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
