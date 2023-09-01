import { useState } from "react"
import TaskCard from "./TaskCard"
import AddTask from "./AddTask";
const dummy_tasks = [
    { title: 'Call mum', status: 'completed', description: 'Call me and see what we can do', deadline: '20/2/2023', reminder: false },
    { title: 'Go shopping', status: 'pending', description: 'Call me and see what we can do', deadline: '20/1/2023', reminder: true },
]



export default function TaskComponent() {
    // const [tasks, setTasks] = useState<>([])
    const [add, setAdd] = useState(false);
    const [dummyTasks, setDummyTasks] = useState(dummy_tasks)
    const [options, setOptions] = useState(false)
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
            status: 'pending'

        }
        setDummyTasks([...dummyTasks, newTask])
    }
    console.log(dummyTasks)
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
                <div className="overflow-y-auto flex flex-col ">


                    {
                        dummyTasks.map((task, i) => {
                            return (
                                <div className=" flex flex-col gap-2" key={i}>
                                    <TaskCard description={task.description} title={task.title} status={task.status} deadline={task.deadline} reminder={task.reminder} options={() => setOptions(!options)} />
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
                }} onchange={() => setTask({ ...task, reminder: !task.reminder })} publish={addNewTask} setTitle={(e) => setTask({ ...task, title: e.target.value })} setDescription={(e) => setTask({ ...task, description: e.target.value })} setDeadline={(e) => setTask({ ...task, deadline: e.target.value })}  />
            }
        </section>
    )
}
