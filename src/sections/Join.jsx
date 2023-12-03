import React from 'react'

const Join = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center bg-white gap-3">
    <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-violet-600">👋 DON'T MISS OUT</h1>
      </div>
      <h2 className="text-4xl font-bold tracking-wide text-center w-full">
      Unleash your <span className="text-coral-red"> Potential </span> with us
      </h2>
      <p className="text-center text-3xl font-medium text-slate-500 w-2/4">
      Join our community of ambitious individuals and organizations eager to make a difference.
      </p>

      <button
          className="relative w-72 h-20 bg-violet-600 text-white font-bold text-3xl tracking-wider rounded-3xl transition duration-300 ease-in-out transform hover:translate-x-1 hover:shadow-md hover:border hover:border-violet-600"
        >
          <span className="relative z-10 transition duration-300 ease-in-out hover:-ml-4">Try out now</span>
     </button>

     <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-3xl font-sans font-bold text-center tracking-wider text-violet-600">200+ <span className='text-black'>Happy users</span></h1>
      </div>

      <img
        src='https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024'
        alt='image'
        className='w-2/4 px-16 mt-8'
      />
        
      
      </div>
    </>

  )
}

export default Join