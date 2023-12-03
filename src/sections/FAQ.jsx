import React, { useState } from "react";
import Question from "./Question";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      id: 2,
      question: "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      answer:
        "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
      id: 3,
      question: "Can I access Manage Wise from different devices and platforms?",
      answer:
        "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      id: 4,
      question: "What kind of support options do you offer to users?",
      answer:
        "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
    },
    {
      id: 5,
      question: "How secure is the data stored within Manage Wise?",
      answer:
        "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },
  ];

  const [items] = useState(questions);

  return (
    <>
      <div className="flex flex-col justify-center items-start gap-3 p-24">
        <div className="bg-white px-4 py-2 mt-8 rounded-xl border-slate-200 border-2">
          <h1 className="text-5xl font-sans font-bold text-left tracking-wider text-violet-600">🙋‍♀️ FAQ</h1>
        </div>
        <h2 className="text-4xl font-bold tracking-wide text-left w-full">
          Need <br /> <span className="text-coral-red"> Answers  </span>
        </h2>
        <p className="text-left text-3xl font-medium text-stone-500 w-2/4">
          Check out our most commonly asked questions below to find the information you need
        </p>
      </div>

      <section className="mx-auto px-24 ">
          <div className="my-8">
            {items.map((item) => (
              <Question key={item.id} {...item} />
            ))}
          </div>
      </section>
    </>
  );
};

export default FAQ;
