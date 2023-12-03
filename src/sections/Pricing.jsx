import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-white gap-3">
    <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-violet-600">💲 PRICING</h1>
      </div>
      <h2 className="text-4xl font-bold tracking-wide text-center w-full">
      Select your ideal <span className="text-coral-red"> Pricing </span> plan
      </h2>
      <p className="text-center text-3xl font-medium text-slate-500 w-2/4">
      At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
      </p>

  {/* 1 */}

      <div className='flex flex-col justify-center  items-start px-14 py-4 bg-violet-100 gap-6 w-2/5 rounded-3xl'>
    <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-orange-400">FREE</h1>
      </div>

      <h1 className=' text-4xl font-bold text-center'>$0<span className='text-xl font-bold'>/month</span></h1>

      <ul >
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Access to all basic features</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Reporting and analytics</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Up to 5 individual users</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Chat and email support</p>
        </li>
      </ul>

        <button className='bg-white text-black text-2xl font-semibold px-8 py-4 rounded-2xl mt-24 mb-8'>Get Started</button>
    </div>

    {/* 2 */}

    <div className='flex flex-col justify-center  items-start px-14 py-4 bg-zinc-900 gap-6 w-2/5 rounded-3xl'>
    <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-orange-400">STANDARD</h1>
      </div>

      <h1 className=' text-4xl font-bold text-white text-center'>$25<span className='text-xl font-bold'>/month</span></h1>

      <ul >
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Access to all basic features</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Reporting and analytics</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Up to 5 individual users</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Chat and email support</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>3+ integrations</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Account performance reporting</p>
        </li>
      </ul>

        <button className='bg-violet-600 text-white text-2xl font-semibold px-8 py-4 rounded-2xl mt-24 mb-8'>Get Started</button>
    </div>

        {/* 3 */}


    <div className='flex flex-col justify-center  items-start px-14 py-4 bg-violet-100 gap-6 w-2/5 rounded-3xl'>
    <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-orange-400">BUSINESS</h1>
      </div>

      <h1 className=' text-4xl font-bold text-center'>$42<span className='text-xl font-bold'>/month</span></h1>

      <ul >
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Access to all basic features</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Reporting and analytics</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Up to 5 individual users</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>Chat and email support</p>
        </li>
        <li className='mb-3'>
            <p className='text-2xl font-medium text-slate-500'>3+ Integrations</p>
        </li>
      </ul>

        <button className='bg-white text-black text-2xl font-semibold px-8 py-4 rounded-2xl mt-24 mb-8'>Get Started</button>
    </div>

    
    </div>

    
        


    </>
  )
}

export default Pricing