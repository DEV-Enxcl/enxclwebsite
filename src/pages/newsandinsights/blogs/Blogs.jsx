// import { useNavigate } from "react-router-dom";
// import RightArrowWhite from "@/components/icons/RightArrowWhite";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import img50 from '@/assets/img50.webp';
import img51 from '@/assets/img51.webp';
import img52 from '@/assets/img52.webp';
import img53 from '@/assets/img53.webp';

const Blogs = () => {
  // const navigate = useNavigate();
  //     const toMvp = () => {
  //       navigate("/blogs/mvp");
  //     };
  //     const toStartUp = () => {
  //       navigate("/blogs/startupjourney");
  //     };
  //     const toStartStartegy = () => {
  //       navigate("/blogs/startupstrategy");
  //     };
  //     const toStartSuccess = () => {
  //       navigate("/blogs/startupsuccess");
  //     };
  //   const cardData = [
  //     {
  //       id: 1,
  //       //   icon: <ExperienceWhite />,
  //       //   icon2: <Experience />,
  //       title: "Global Program Mastery",
  //       description:
  //         "Managed several products and large programs with globally distributed teams in multiple domains and technologies",
  //     },
  //     {
  //       id: 2,
  //       //   icon: <Bot />,
  //       //   icon2: <BotBlack />,
  //       title: "Business Empowerment",
  //       description:
  //         "Experience in Build, Operate and Transfer(BOT)-practices, competencies, captive units and ODCs",
  //     },
  //     {
  //       id: 3,
  //       //   icon: <Pricing />,
  //       //   icon2: <PricingBlack />,
  //       title: "Competitive Pricing",
  //       description:
  //         "Highly competitive rates leveraging the location advantages and high availability of talent",
  //     },
  //     {
  //       id: 4,
  //       //   icon: <Training />,
  //       //   icon2: <TrainingBlack />,
  //       title: "Expert-Led Tailored Training",
  //       description:
  //         "Customized trainings from entry level to senior leadership, desgined and delivered by industry experts",
  //     },
  //   ];

  // State to handle which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const toBusinessEnablement = (path) => {
    navigateTo(path);
  };

  const cards = [
    {
      id: 1,
      title: "Navigating the Startup Journey: A Founder's Reflection on Four Years of Challenges and Triumphs",
      imgSrc: img50,
      path: '/blogs/startupjourney',
    },
    {
      id: 2,
      title: "Tapping into the Rural Goldmine: A Startup Strategy",
      imgSrc: img51,
      path: '/blogs/startupstrategy',
    },
    {
      id: 3,
      title: "Is Industry Experience Necessary for Startup Success?",
      imgSrc: img52,
      path: '/blogs/startupsuccess',
    },
    {
      id: 4,
      title: "Why Every Startup Should Build a Minimum Viable Product (MVP) ?",
      imgSrc: img53,
      path: '/blogs/mvp',
    },
  ];

  const mainTitle = "Blogs";
  return (
    <>
      <div className="pt-24 py-8 md:px-24 px-8">
        <div className="relative bg-[url('/src/assets/Blog1.webp')] bg-cover text-white md:h-[200px]  h-auto rounded-2xl flex items-center cursor-pointer">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

          <div className="relative flex h-auto justify-between p-8">
            <div>
              <span className="md:text-[44px] text-[30px] font-bold flex md:flex-nowrap flex-wrap">
                {mainTitle}
              </span>
            </div>
          </div>
        </div>
        <div>

        </div>
        {/* ---------SAMPLE START---------- */}
        <div>
          <div className='flex items-center flex-wrap gap-2 py-5'>
            <p className='md:text-[20px] text-[14px] text-justify text-black'>Welcome to enxcl blog that bridges education, technology, startups, and personal growth. Whether you&apos;re an aspiring entrepreneur or a learner aiming to enhance your skills, we offer the knowledge and resources that will empower you to launch your startup and continue evolving in today&apos;s digital world</p>
            <span className="md:text-[44px] text-[30px] text-black font-bold">Read Our Blogs</span>
            {/* <OurService /> */}
          </div>
        </div>
        <div className="flex justify-center gap-4 p-4 md:flex-nowrap flex-wrap w-full">
          {cards.map(card => (
            <div
              onClick={() => toBusinessEnablement(card.path)}
              key={card.id}
              className="relative w-72 h-56 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out  cursor-pointer text-center"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(card.id)} // Handle touch start
              onTouchEnd={() => setHoveredCard(null)} // Handle touch end
            >
              <img
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out ${hoveredCard === card.id ? 'scale-110 -rotate-30' : ''
                  }`}
                src={card.imgSrc}
                alt={card.title}
                style={{ opacity: hoveredCard === card.id ? '1' : '0.7' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent">
                {/* Description */}
                <div
                  className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center p-4 text-white text-sm transition-opacity duration-300 ease-in-out bg-[#242424de] rounded-lg opacity-0 ${hoveredCard === card.id ? 'opacity-80' : 'opacity-0'}`}

                >
                  <span className="text-white text-lg mb-2 h-[50px] flex items-center justify-center rounded-lg font-bold">
                    {card.title}
                  </span>
                  <p className="leading-relaxed text-[16px]">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
