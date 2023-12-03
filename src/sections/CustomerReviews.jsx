import React from 'react'

const TestimonialCard = ({ img,text, author, position }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto m-8 gap-6 ">
    <p className="text-2xl font-semibold tracking-wider mb-4">{text}</p>
    <div className="flex items-center mt-16">
      <img
        src={img}
        alt={`${author}'s avatar`}
        className="rounded-full mr-4"
      />
      <div>
        <p className="font-bold text-xl">{author}</p>
        <p className='text-xl text-slate-600'>{position}</p>
      </div>
    </div>
  </div>
);

const CustomerReviews = () => {
  const testimonialsData = [
    {
      text:
        "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
      author: 'Emily',
      position: 'Art Director',
      img:"https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
    },
    {
      text:
        "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      author: 'Sarah',
      position: 'Project Manager',
      img:"https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
    },
    {
      text:
        'Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.',
      author: 'David',
      position: 'Freelancer',
      img:"https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
    },
    {
      text:
        "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      author: 'Alex',
      position: 'IT Manager',
      img:"https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-start gap-3 p-24">
        <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
          <h1 className="text-5xl font-sans font-bold text-left tracking-wider text-violet-600">🧡

TESTIMONIALS</h1>
        </div>
        <h2 className="text-4xl font-bold tracking-wide text-left w-full">
        Hear from our <br /> <span className="text-coral-red"> Satisfied  </span> Clients
        </h2>
        <p className="text-left text-3xl font-medium text-stone-500 w-2/4">
        Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
    </>
  )
}

export default CustomerReviews