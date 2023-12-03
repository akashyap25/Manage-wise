import React from 'react';

const PopularProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-3">
      <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-violet-600">🔥 PREMIER FEATURES</h1>
      </div>
      <h2 className="text-4xl font-bold tracking-wide text-center w-full">
        Discover our product's <span className="text-coral-red"> Capabilities </span>
      </h2>
      <p className="text-center text-3xl font-medium text-slate-500 w-2/4">
        Don't settle for mediocrity - embrace the future of management with Manage Wise.
      </p>

      <div className="bg-violet-100 rounded-2xl h-auto opacity-100  w-1/2 py-12 px-8 gap-8 mt-12">
        <div className="flex flex-col justify-start p-4">
          <div className='h-auto w-16 bg-white rounded-3xl pb-2 mb-6'>
            <p className="text-4xl font-bold text-purple-700">⭐️</p>
          </div>
          <h3 className="text-4xl font-bold text-gray-800 w-3/4 tracking-wider mt-4">
            Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
          </h3>
        </div>
      </div>

      <div className='w-1/2 border-solid border-2 border-slate-100 rounded-2xl  mt-16'>
        <img
          src='https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024'
          alt='image'
        />
        <div className='px-8 py-12'>
        <h1 className='text-3xl font-bold'>
          Smart Task Management
        </h1>
        <p className=' text-2xl font-medium text-slate-500'>
        Say goodbye to chaos with our smart task management system
        </p>
        </div>
      </div>

      <div className='w-1/2 border-solid border-2 border-slate-100 rounded-2xl  mt-16'>
        <img
          src='https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512'
          alt='image'
        />
        <div className='px-8 py-12'>
        <h1 className='text-3xl font-bold'>
        Flexible Scheduling
        </h1>
        <p className=' text-2xl font-medium text-slate-500'>
        Stay productive with our flexible scheduling system
        </p>
        </div>
      </div>

      <div className='w-1/2 border-solid border-2 border-slate-100 rounded-2xl  mt-16'>
        <img
          src='https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512'
          alt='image'
        />
        <div className='px-8 py-12'>
        <h1 className='text-3xl font-bold'>
        Easy Communication
        </h1>
        <p className=' text-2xl font-medium text-slate-500'>
        Collaborate seamlessly with your team in real-time
        </p>
        </div>
      </div>

      <div className='w-1/2 border-solid border-2 border-slate-100 rounded-2xl  mt-16'>
        <img
          src='https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512'
          alt='image'
        />
        <div className='px-8 py-12'>
        <h1 className='text-3xl font-bold'>
        Analytics
        </h1>
        <p className=' text-2xl font-medium text-slate-500'>
        Gain valuable insights with our advanced analytics feature
        </p>
        </div>
      </div>

    </div>

  );
};

export default PopularProducts;
