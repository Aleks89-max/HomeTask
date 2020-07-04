import React from "react";
import {Task1Type} from "./App";
import s from './Task1.module.css'

function Task1(props: Task1Type) {
    return (
        <div className={s.div}>
            <div className={s.div__box}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.text}
                </div>
            </div>
        </div>
    )


}

export default Task1