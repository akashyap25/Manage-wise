import React from 'react';

const Features = () => {
  return (
    <>
      <div className='bg-zinc-900 flex flex-col justify-center items-start gap-3'>
        <div className='flex flex-col justify-center items-start gap-3 p-24'>
          <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
            <h1 className="text-5xl font-sans font-bold text-left tracking-wider text-violet-600">🤩 AND MORE...</h1>
          </div>
          <h2 className="text-4xl font-bold tracking-wide text-left text-orange-50 w-full">
            Explore an array of features that elevate your <span className="text-coral-red"> Productivity  </span> to new heights
          </h2>
          <p className="text-left text-3xl font-medium text-stone-500 w-2/4">
            Discover the tools that will revolutionize the way you manage and optimize your operations
          </p>
        </div>


        <div className='w-full p-24 '>
        <div className="flex flex-col items-center justify-center mt-20 p-16 bg-neutral-800 rounded-3xl">
        <img
        src=''
        alt="Cross-platform compatibility"
        className="w-72 h-48 mt-4"
      />
      <h2 className="text-3xl font-bold text-orange-50">Cross-Platform Compatibility</h2>
      
      <p className="text-center text-2xl font-medium text-stone-500 mt-2">
        Enjoy the flexibility of cross-platform compatibility. Our product works
        seamlessly across desktop, web, and mobile devices, allowing you to work
        from your preferred device.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center mt-20 p-16 bg-neutral-800 rounded-3xl">
        <img
        src=''
        alt="Cross-platform compatibility"
        className="w-72 h-48 mt-4"
      />
      <h2 className="text-3xl font-bold text-orange-50">Stay Informed with Essential Notifications</h2>
      
      <p className="text-center text-2xl font-medium text-stone-500 mt-2">
      Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center mt-20 p-16 bg-neutral-800 rounded-3xl">
        <img
        src=''
        alt="Cross-platform compatibility"
        className="w-72 h-48 mt-4"
      />
      <h2 className="text-3xl font-bold text-orange-50">Secure Data Encryption at all times</h2>
      
      <p className="text-center text-2xl font-medium text-stone-500 mt-2">
      Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.
      </p>
    </div>
        </div>

   <div className='flex flex-col justify-center items-center gap-3 mt-64'>
   <div className="bg-white px-4 py-2 mt-16 rounded-xl border-slate-200 border-2 ">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-violet-600">🛠 INTEGRATIONS</h1>
      </div>
      <h2 className="text-4xl font-bold tracking-wide text-orange-50 text-center w-1/2 mt-8">
      Enable <span className="text-coral-red"> integration </span> with other popular tools and platforms
      </h2>
      <p className="text-center text-3xl font-medium text-stone-500 w-2/5 mt-8">
      Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
      </p>

      <img
        src='https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024'
        alt='image'
        className='w-2/4 px-16 mt-8'
      />
   </div>
       
      </div>
    </>
  );
};

export default Features;
