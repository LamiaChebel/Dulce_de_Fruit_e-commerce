import React from "react";
import Slider from "./Components/Slider";
import Infos from "./Components/Infos";

import style from "./home.module.css";

function Home(){
    return(
        <main className={style.main}>		
			
            <Slider />
            <p>En chantier...</p>
            <Infos />

    </main>

    )
}

export default Home;