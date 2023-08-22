import React from "react";

import { useState } from "react";

import slider1 from "../../../assets/img/slider/slider-1.jpg";
import slider2 from "../../../assets/img/slider/slider-2.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import style from "../home.module.css";

function Slider() {

    const imagesSlider = [
        {
            id: 1,
            url: slider1,
        },
        {
            id: 2,
            url: slider2,
        }
    ];

    const [index, setIndex] = useState(0);
    function sliderHandlerNext(e) {
        e.preventDefault();
        if (index === imagesSlider.length - 1) {
            return setIndex(0);
        }
        else {
            return setIndex(index + 1);
        }
    }

    function sliderHandlerPrev(e) {
        e.preventDefault();
        if (index === 0) {
            return setIndex(imagesSlider.length - 1);
        }
        else {
            return setIndex(index - 1);
        }
    }

    return (
        <div className={style.slider} aria-live="polite">

            <figure id={imagesSlider[index].id} className={style.sliderFigure}>
                <img src={imagesSlider[index].url} alt="" />
            </figure>

            <nav className={style.sliderNavOnImg}>
                <button rel="prev"
                        className={style.navBtn}
                        aria-label="Preview"
                        onClick={sliderHandlerPrev}>
                    <FontAwesomeIcon icon={faCircleChevronLeft}
                                     className={style.navOnImg}
                                     aria-hidden="true" />
                </button>

                <button rel="prev" 
                        className={style.navBtn}
                        aria-label="Next"
                        onClick={sliderHandlerNext}>
                    <FontAwesomeIcon icon={faCircleChevronRight}
                                     className={style.navOnImg}
                                     aria-hidden="true" />
                </button>
                
            </nav>

            <nav className={style.sliderNav}>

                <button rel="prev" 
                        className={style.navBtn} 
                        aria-label="Preview" 
                        onClick={sliderHandlerPrev}>

                    <FontAwesomeIcon icon={faCircle} 
                                     className={style.navIcon} 
                                     aria-hidden="true" />
                </button>

                <button rel="prev" 
                        className={style.navBtn}
                        aria-label="Next"
                        onClick={sliderHandlerNext}>
                            
                    <FontAwesomeIcon icon={faCircle}
                                     className={style.navIcon}
                                     aria-hidden="true" />
                </button>

            </nav>

        </div>

    )
}

export default Slider;