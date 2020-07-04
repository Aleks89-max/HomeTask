import React from "react";
import {EverydayActivitiesType, FilterValuesType} from "./App";
type PropsEverydayActivitiesType = {
    everydayActivities: Array<EverydayActivitiesType>
    removeActivities:(id:number) => void
    changeFilter:(value: FilterValuesType) => void
}
function Task2 (props: PropsEverydayActivitiesType) {
    return (
        <div >
            {props.everydayActivities.map((t) =>
                 <p key={t.id}>{t.activities}-{t.priority}
                 <button onClick={()=> {{props.removeActivities(t.id)}}}>x</button>
                 </p>
            )}
            <button onClick={() => {props.changeFilter('All')}}>All</button>
            <button onClick={() => {props.changeFilter('Important')}}>Important</button>
            <button onClick={()=> {props.changeFilter('No Important')}}>No Important</button>
            <button onClick={() => {props.changeFilter('Average')}}>Average</button>

        </div>
    )

}
export default Task2

