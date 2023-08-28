import React from "react";

import Slider from "./Components/Slider.jsx";
import Section from "./Components/Section.jsx";
import Infos from "./Components/Infos.jsx";

import style from "./home.module.css";

function Home(){


    return(
        <main className={style.main}>		
			
            <Slider />

            <Section />

            <Infos />

    </main>

    )
}

export default Home;