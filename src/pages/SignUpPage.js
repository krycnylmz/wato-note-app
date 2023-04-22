import React from 'react'
import bg from "../bg.png";
import logo from "../logo_white.png";

function SignUpPage() {
  return (
  
      // backgroundImage
      <div
      className="bg-cover bg-center h-screen w-screen pt-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row items-center justify-center h-20 max-w-3xl sm:m-auto mx-4 bg-purple-700 rounded-3xl ">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
    

    <form className='max-w-3xl h-72 justify-around rounded-3xl bg-purple-700 flex flex-col p-8 m-auto mt-8'>
      <input name='name' placeholder='Jhon Doe' className='rounded-xl  p-3'/>
      <input name='email' placeholder='wato@gmail.com' className='rounded-xl  p-3'/>
      <input name='pass' placeholder='********' className='rounded-xl  p-3'/>
      <button type='submit' className=' bg-zinc-100 w-24 p-2 rounded-lg end-0 self-end'> Log me in! </button>
    </form>



      <ul className="w-screen h-28 bottom-0 absolute flex flex-row justify-between p-8 sm:px-32 text-sm sm:text-3xl list-disc text-purple-100">
        <li>Free</li>
        <li>Easy to Use</li>
        <li>Fun</li>
        <li>Responsive Design</li>
        
      </ul>
    </div>
  )

}

export default SignUpPage