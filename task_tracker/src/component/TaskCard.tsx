import { BsThreeDots } from 'react-icons/bs'

export type TaskPsops = {
  title: string;
  status: string;
  deadline: string;
  reminder: boolean;
  description: string;
  options: ()=> void;
}
export default function TaskCard({ title, description, status , deadline, reminder, options}: TaskPsops) {
  return (
    <section className={`text-purple-500 ${reminder && 'border-l-8 border-r-purple-300'} p-2 border shadow-sm my-1 border-purple-500 rounded-sm h-18 w-full   `}>
      <div className=' flex flex-col'>
        <span className=' flex w-full items-center justify-between'>
          <h1 className={`${status == 'completed' && 'line-through'} text-2xl `}>{title} </h1>
          <p className=' cursor-pointer' onClick={options}>  <BsThreeDots /></p>
        </span>
        <span className=' flex w-full items-center justify-between'>
          <p className='truncate'>{description} </p>
          <p>{deadline} </p>
        </span>
      </div>
    </section>
  )
}



{/* <div className={` w-full flex   `}>
  <div className=" flex w-full items-center flex-col">
    <span className=' w-full flex justify-between items-center'>

      <h1 className={`${status == 'completed' && 'line-through'} text-2xl `}>{title} </h1>

      
    </span>

    <div className=' flex flex-col items-center justify-between '>
      <p className='text-xs lg:text-sm'>{description} </p>
      {deadline}
    </div>
  </div>
</div> */}