import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Salt", isDone: true},
            {id: v1(), title: "Sugar", isDone: false},
            {id: v1(), title: "Burger", isDone: true},
            {id: v1(), title: "Pizza", isDone: false},
        ]
    });

    function removeTask(todolistID: string, taskId: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== taskId)})
    }

    function addTask(todolistID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [task, ...tasks[todolistID]]})
    }
    function changeStatus(taskId: string, isDone: boolean) {
        /*let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);*/
    }



    function changeFilter(value: FilterValuesType) {
        /*setFilter(value)*/;
    }


    return (
        <div className="App">

            {todolists.map(t => {

                let tasksForTodolist = tasks[t.id];

                if (t.filter === "active") {
                    tasksForTodolist.filter(t => !t.isDone);
                }
                if (t.filter === "completed") {
                    tasksForTodolist.filter(t => t.isDone);
                }

                return <Todolist title={t.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={t.filter}
                                 todolistID={t.id}
                                 key={t.id}
                />
            })}


        </div>
    );
}

export default App;
