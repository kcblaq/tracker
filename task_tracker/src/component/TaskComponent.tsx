import {  useState } from "react"
import TaskCard from "./TaskCard"
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
const dummy_tasks = [
    { title: 'Call mum', status: 'completed', description: 'Call me and see what we can do', deadline: '2023-02-20', reminder: false, id: 1 },
    { title: 'Go shopping', status: 'pending', description: 'Call me and see what we can do', deadline: '2023-01-20', reminder: true , id:2},
    { title: 'hit the gym', status: 'pending', description: 'As early as 5am', deadline: '2023-01-20', reminder: true, id:3 },
]




export default function TaskComponent() {
    const [add, setAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false)
    const [dummyTasks, setDummyTasks] = useState(dummy_tasks)
    const [task, setTask] = useState({
        title: '',
        description: '',
        deadline: '',
        reminder: false,
        status: ''
    })


    const addNewTask = () => {
        const newTask = {
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            reminder: task.reminder,
            status: 'pending',
            id: dummyTasks[dummyTasks.length - 1].id + 1

        }
        setDummyTasks([...dummyTasks, newTask])
        setAdd(false)
        setTask({
            title: '',
            description: '',
            deadline: '',
            reminder: false,
            status: ''
        })
    }

    const deleteTask = (deletingTitle: string) => {
        const updatedTask = dummyTasks.filter((task) => task.title != deletingTitle);
        setDummyTasks(updatedTask);
    }

    const handleStatus = (title: string) => {
        const taskToUpdate = dummyTasks.find((task) => task.title === title);

        if (taskToUpdate) {
            taskToUpdate.status = taskToUpdate.status === 'pending' ? 'completed' : 'pending';
            const updatedTasks = dummyTasks.map((task) => (task.title === title ? taskToUpdate : task));
            setDummyTasks(updatedTasks);
        }
    };

    const handleReminder = (title: string) => {
        const taskToUpdate = dummyTasks.find((task) => task.title === title);

        if (taskToUpdate) {
            taskToUpdate.reminder = taskToUpdate.reminder === true ? false : true;
            const updatedTasks = dummyTasks.map((task) => (task.title === title ? taskToUpdate : task));
            setDummyTasks(updatedTasks);
        }
    };



    const HandleUpdate = (idToUpdate: number ) => {
        const indexToUpdate = dummyTasks.findIndex((task) => task.id === idToUpdate);

        console.log({indexToUpdate, idToUpdate} )
        if (indexToUpdate !== -1) {
            

            const updatedTask = {
                ...dummyTasks[indexToUpdate],
                title: task.title,
                description: task.description,
                reminder: task.reminder,
                deadline: task.deadline,
                status: task.status,
            };
           
            const updatedTasks = [...dummyTasks];
            updatedTasks[indexToUpdate] = updatedTask;
            console.log({updatedTasks})
            setDummyTasks(updatedTasks);
            setTask({
                title: '',
                description: '',
                reminder: false,
                deadline: '',
                status: '',

            })
        }

        setOpenUpdate(false);
    };






    return (
        <section className=" bg-purple-500 h-[100dvh] w-[100dvw] flex flex-col justify-center items-center p-2 2xl:p-4">
            <div className=" bg-white h-[90dvh] md:h-[80dvh] w-[90dvw] lg:w-[60dvw] 2xl:w-[60dvw] rounded-sm shadow-md flex flex-col p-2 lg:p-4 2xl:p-8 ">
                <div className=" h-28 flex flex-col gap-2">
                    <span className=" w-full flex items-center justify-center ">
                        <h2 className="  text-4xl 2xl:text-8xl font-black mt-2 md:mt-6"> Task tracker</h2>
                    </span>
                    <span className=" flex justify-end pb-2 relative">
                        <button className=" shadow-md px-3 py-1 float-right border-purple-500 rounded-3xl border font-bold" onClick={() => setAdd(true)}> Add task + </button>


                    </span>
                </div>
                <div className="overflow-y-auto flex flex-col h-full no-scrollbar ">


                    {
                        dummyTasks.map((task, i) => {
                            return (
                                <div className=" flex flex-col gap-2" key={i}>
                                    <TaskCard description={task.description} title={task.title} status={task.status} deadline={task.deadline} reminder={task.reminder} handleDelete={(title) => deleteTask(title)} handleStatus={(title) => handleStatus(title)} handleReminder={(title) => handleReminder(title)} isOn={task.reminder} setIsOn={() => task.reminder == true ? false : true} setUpdate={() => {
                                        setOpenUpdate(!openUpdate);
                                        setTask(task)
                                    }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                add && <AddTask close={() => setAdd(false)} task={{
                    title: task.title,
                    status: task.status,
                    deadline: task.deadline,
                    reminder: task.reminder,
                    description: task.description,
                }} onchange={() => setTask({ ...task, reminder: !task.reminder })} publish={addNewTask} setTitle={(e) => setTask({ ...task, title: e.target.value })} setDescription={(e) => setTask({ ...task, description: e.target.value })} setDeadline={(e) => setTask({ ...task, deadline: e.target.value })} />
            }
            {
                openUpdate && <UpdateTask close={() => setOpenUpdate(false)} task={task} onchange={() => setTask({ ...task, reminder: !task.reminder })}
                    Update={HandleUpdate} setTitle={(e) => setTask({ ...task, title: e.target.value })} setDescription={(e) => setTask({ ...task, description: e.target.value })}
                    setDeadline={(e) => setTask({ ...task, deadline: e.target.value })}
                />
            }
        </section>
    )
}
