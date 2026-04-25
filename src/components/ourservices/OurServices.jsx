import { useState } from 'react';
import img1 from '@/assets/service1.webp';
import img2 from '@/assets/service2.webp';
import img3 from '@/assets/service3.webp';
import img4 from '@/assets/service4.webp';
import OurService from '../icons/OurService';
import { useNavigate } from 'react-router-dom';
import RightArrowWhite from '../icons/RightArrowWhite';

const OurServices = () => {
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
    { id: 1, title: "Xclerate", imgSrc: img1, description: "We set ourselves apart in the business and management consulting by focusing on delivering actionable results, while leveraging the deep expertise of our seasoned consultants.", path: '/xclerate' },
    { id: 2, title: "ITExS", imgSrc: img4, description: "Our Technology Consulting and Services excel in delivering end-to-end services across three core pillars: Technology Consulting, Software Development, and Managed Services.", path: '/itexs' },
    { id: 3, title: "BizExS", imgSrc: img2, description: "Business Enablement Services serves as a strategic partner, guiding organizations in building Centers of Excellence through sustainable practices while enhancing the human element driving operational excellence and long-term success in a competitive landscape.", path: '/bizexs' },
    { id: 4, title: "XpertEaze", imgSrc: img3, description: "Our deep understanding of the industry enables us to impart innovative, insightful, and industry-relevant training programs to corporates, professionals, and IT career aspirants.", path: '/xperteaze' }
  ];
  return (
    <>
      <div className="bg-cover  bg-black h-auto md:px-24 py-18 p-8">
        <div>
          {/* <h2 className='flex text-base gap-2 text-white font-semibold items-center'>
                        Our Services
                    </h2> */}
          <div className='flex items-center flex-wrap gap-2'>
            <OurService />
            <span className='md:text-[44px] text-[30px] text-white font-bold w-3/4'>
              Our Services
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-4 p-4 md:flex-nowrap flex-wrap w-full">
          {cards.map(card => (
            <div
              key={card.id}
              className="relative w-72 h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:w-96 cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(card.id)} // Handle touch start
              onTouchEnd={() => setHoveredCard(null)} // Handle touch end
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                src={card.imgSrc}
                alt={card.title}
                style={{ opacity: hoveredCard === card.id ? '1' : '0.7' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent">
                {/* Title */}
                <h3
                  className={`text-black text-lg mb-2 bg-[#ff9900] h-[50px] flex items-center justify-center rounded-lg text-[24px] font-bold transition-opacity duration-300 ease-in-out`}
                  style={{ opacity: hoveredCard === card.id ? '0' : '1' }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <div
                  className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center p-4 text-white text-sm transition-opacity duration-300 ease-in-out bg-[#242424de] rounded-lg opacity-0 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}
                 
                >
                  <span className="text-white text-lg mb-2 h-[50px] flex items-center justify-center rounded-lg font-bold">
                    {card.title}
                  </span>
                  <p className="leading-relaxed text-[16px]">{card.description}</p>
                  <div>
                    <button className="w-[150px] h-[38px] rounded-3xl bg-[#ffbf4700] flex justify-center items-center gap-[10px] font-semibold hover:font-bold border border-white mt-3"  onClick={() => toBusinessEnablement(card.path)}>
                      <span>
                        Know More
                      </span>
                      <RightArrowWhite />
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
};

export default OurServices;
