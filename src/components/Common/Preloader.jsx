import react from "react";
import s from "./Preloader.module.css"

const Preloader = () =>{
    return(
        <div class={s.preloader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
}

export default Preloader;