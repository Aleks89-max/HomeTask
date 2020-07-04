import React, {useState} from 'react';
import './App.css';
import Task1 from './Task1';
import Task2 from "./Task2";

export type Task1Type = {
    name: string;
    text: string
}
export type EverydayActivitiesType = {
    activities: string
    priority: string
    id: number
}

export type FilterValuesType = 'All' | 'Important' | 'No Important' | 'Average'
function App() {


    let [Activities, setTask] = useState<Array<EverydayActivitiesType>>([
        {id: 1, activities: 'Work', priority: 'height'},
        {id: 2, activities: 'Game', priority: 'low'},
        {id: 3, activities: 'React', priority: 'height'},
        {id: 4, activities: 'Anime', priority: 'middle'}
    ])

    function removeActivities(id: number) {
        let removeActivities = Activities.filter((t) => t.id !== id)
        setTask(removeActivities)
    }
    let [filter, setFilter] = useState<FilterValuesType>('All')

    function changeFilter (value: FilterValuesType) {
        setFilter(value)
    }
    let filterTask2 = Activities
    if (filter === 'Important') {
        filterTask2 = Activities.filter((t)=> t.priority === 'height')
    }
    if (filter === 'No Important') {
        filterTask2 = Activities.filter((t) => t.priority === 'low')
    }
    if (filter === 'Average') {
        filterTask2 = Activities.filter((t)=> t.priority === 'middle')
    }


    return (
        <div className="App">
            < Task1 name={'Alexandr'} text={'npm start нажимал'}/>
            < Task2 everydayActivities={filterTask2}
                    removeActivities={removeActivities}
                    changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
