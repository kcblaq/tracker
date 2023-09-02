import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs'
import ToggleButton from './TottleButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export type TaskPsops = {
  title: string;
  status: string;
  deadline: string;
  reminder: boolean;
  description: string;
  handleDelete?: (title: string) => void;
  handleStatus?: (title: string) => void;
  handleEdit?: (title: string) => void;
  handleReminder?: (title: string) => void;
  isOn: boolean;
  setIsOn: (e: boolean) => void;
  setUpdate: () => void;
  
}
export default function TaskCard({ title, description, status, deadline, reminder, handleDelete, handleStatus,  handleReminder, isOn, setIsOn, setUpdate }: TaskPsops) {
  const [more, setMore] = useState(false);
  return (
    <section className={`text-purple-500 ${reminder && 'border-l-8 border-r-purple-300'} p-2 border shadow-sm my-1 border-purple-500 rounded-sm h-18 w-full   `}>
      <div className=' flex flex-col'>
        <span className=' flex w-full items-center justify-between'>
          <h1 className={`${status == 'completed' && 'line-through'} text-2xl truncate `}>{title} </h1>
          <span className=' relative'>
            <span className=' flex items-center gap-2'>

              
              <AiOutlineDelete className='cursor-pointer hover:font-bold rounded-md ' onClick={() => handleDelete?.(title)} />
              <AiOutlineEdit className='cursor-pointer hover:font-bold rounded-md ' onClick={setUpdate} />
              <p className=' cursor-pointer' onClick={() => setMore(!more)}>  <BsThreeDots /></p>
              
            </span>
            {
              more && (
                <div className=' absolute h-12  p-2 border rounded shadow-lg right-0 bg-white z-10 w-40' onClick={(e) => e.stopPropagation()}>
                  <button className=' w-full hover:bg-purple-300 border border-purple-300 p-2 py-1 ' onClick={() => {
                    handleStatus?.(title);
                    setMore(false)
                  } }>{status == 'pending' ? 'Completed' : 'Pending'} </button>
                  
                  
                </div>
              )
            }
          </span>
        </span>
        <span className=' flex w-full items-center justify-between'>
          <p className='truncate'>{description} </p>
          <span className=' flex items-center gap-1 md:gap-2'>
            <p>{deadline} </p>
            <ToggleButton isOn={isOn} onClick={() => {
              setIsOn(!isOn);
              handleReminder?.(title);
            }}  />
          </span>
        </span>
      </div>
    </section>
  )
}

