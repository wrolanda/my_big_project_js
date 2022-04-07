import css from "../../Users/users.module.css";
import preloader from "../../../assets/images/preloader256x256.gif";
import React from "react";

let Preloader = (props) => {
    return <div className={css.preloader}>
        <img src={preloader} />
    </div>
};

export default Preloader;