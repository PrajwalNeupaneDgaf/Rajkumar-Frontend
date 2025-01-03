import React from 'react'

const RightSideIntro = () => {
  return (
    <div className='text-white lg:pl-12 pt-12 lg:w-[70%] absolute w-[100%] lg:relative h-full flex justify-around flex-col'> 
      <div className='pt-12 flex flex-col'>
        {/* Styled "I AM" text */}
        <div className='text-4xl md:text-5xl lg:text-6xl font-extrabold  '>
          I AM <span className='text-black'>FREESTYLE</span><span className='text-sm h-full'>TM</span>
        </div>
        
        {/* Stylish Name "R. NAIKEY" with glowing effect */}
        <div className='text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse'>
         RAPPER
        </div>

        {/* "WELCOME ! PAL" text with glow effect */}
        <div  className=' fire text-5xl  md:text-6xl tracking-tighter font-extrabold '>
         ON FIRE
        </div>
      </div>

      <div>
        {/* "RAJKUMAR SHAHI THAKURI" with text shadow */}
        <div className='lg:text-4xl text-xl font-bold namebelow text-cyan-500 text-shadow-lg'>
          RAJKUMAR SHAHI THAKURI
        </div>
      </div>
    </div>
  )
}

export default RightSideIntro;
