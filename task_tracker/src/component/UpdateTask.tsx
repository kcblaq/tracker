import { AiOutlineClose } from 'react-icons/ai'
// import { TaskPsops } from './TaskCard';
import { ChangeEvent } from 'react';

interface UpdateProps {
  title: string;
  description: string,
  reminder: boolean,
  deadline: string,
  id?: number,
}
export type Prop = {
  close: () => void;
  task: UpdateProps;
  onchange: () => void;
  Update: (id: number) => void;
  setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  setDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  setDeadline: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function UpdateTask({ close, task, onchange, Update, setDeadline, setTitle, setDescription }: Prop) {
  console.log({task})
  return (
    <div className="h-screen w-screen flex justify-center p-2 items-center fixed top-0 left-0 right-0 z-10">
      <div
        className={`md:max-h-3/3 lg:max-h-3/3 xl:max-h-2/3 my-0  w-5/6 md:w-4/12 lg:w-3/12 sm:w-3/12 lg:max-w-sm  
            md:max-w-[400px] xl:max-h-full xl:max-w-[500px]
            rounded-md p-2 py-5 overflow-auto no-scrollbar relative h-72 bg-white border shadow-lg`}
      >
        <div className="w-full rounded-sm flex justify-center items-center">
          <p className="font-semibold"> Update task</p>
          <div
            onClick={close}
            className="cursor-pointer absolute top-2 right-1"
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
        </div>
        <div className=" border rounded-sm w-full p-2  h-52 bg-white">
          <form className=' grid gap-2'>
            <input type="text" value={task.title} placeholder="Enter title" className='border px-2 p-1 w-full rounded-md focus:outline-none' onChange={setTitle} />
            <input type="text" value={task.description} placeholder="Enter description" className='border px-2 p-1 w-full rounded-md focus:outline-none' onChange={setDescription} />
            <input type="date" value={task.deadline} placeholder="Enter deadline" className='border px-2 p-1 w-full rounded-md focus:outline-none' onChange={setDeadline} />
            <span className=' flex gap-2 items-center'>
              <label htmlFor="notify"> Set reminder</label>
              <input type="checkbox" checked={task.reminder} className='cursor-pointer' placeholder="Set reminder" onChange={onchange} />
            </span>
          </form>
          <span className=''>
            <button className=' float-right px-5 p-1 rounded-3xl border-purple-500 border' onClick={()=>Update(task.id as number)}>
              Update
            </button>
          </span>
        </div>

      </div>
    </div>

  )
}

