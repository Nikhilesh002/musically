"use client"
import { useForm } from 'react-hook-form';
import { Meteors } from '@/components/ui/meteors';

interface FormData{
  email:string,
  message:string
}

function Page() {
  const {register,handleSubmit,formState: { errors }}=useForm<FormData>();

  async function signup(data:FormData){
    console.log(data);
  }

  return (
    <div className="bg-black/[0.92] min-h-screen pt-52">
      <div className=" w-full mx-auto relative max-w-lg">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-700 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <form onSubmit={handleSubmit(signup)} className='px-5 pt-2 w-full' >
              <h1 className='mb-3 text-3xl font-bold font-mono text-white text-center'>Contact Us</h1>
              {/* error */}
              {(errors.email?.type==="required") && (<p className='text-center text-red-500 font-serif leading-6'>Email is required</p>)}
              {(errors.message?.type==="required") && (<p className='text-center text-red-500 font-serif leading-6'>Message is required</p>)}
              {(errors.message?.type==="minLength") && (<p className='text-center text-red-500 font-serif leading-6'>Message must be no shorter than 20 characters</p>)}
              {(errors.message?.type==="maxLength") && (<p className='text-center text-red-500 font-serif leading-6'>Message must be no longer than 300 characters</p>)}

              <div className="flex flex-col gap-5 my-5">
                <input className='border-black border-2 rounded-md px-2 py-1 text-center text-lg'
                  type="email" id="email" placeholder='Email'
                  {...register("email",{required:true})}/>
                <textarea id="message" cols={50} rows={8}
                  className='border-2 border-black px-1 py-1 rounded-lg font-serif ' placeholder='Type your message'
                  {...register("message",{required:true, minLength:20,maxLength:300})}></textarea>
              </div>

              <button type='submit' className='shadow-sm bg-green-400 hover:bg-green-500 rounded-lg px-2 py-1 block m-auto mt-4'>Submit</button>

            </form>
            <Meteors number={30}/>
          </div>
      </div>
    </div>
  )
}

export default Page;
