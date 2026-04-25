import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import LeftArrowWhite from '../icons/LeftArrowWhite';
import RightArrowWhite from '../icons/RightArrowWhite';
import RightArrow from '../icons/RightArrow';
import RightArrowYellow from '../icons/RightArowyellow';

// eslint-disable-next-line react/prop-types
const ResponsiveCarousel = ({ teamMembers }) => {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(window.innerWidth <= 640 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // eslint-disable-next-line react/prop-types
  const chunkedTeamMembers = teamMembers.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerRow);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % chunkedTeamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + chunkedTeamMembers.length) % chunkedTeamMembers.length);
  };

  return (
    <div className="mt-4">
      {/* For md and above, show carousel */}
      <div className="hidden md:block">
        <Carousel>
          <CarouselContent>
            {chunkedTeamMembers.map((teamGroup, groupIndex) => (
              <CarouselItem key={groupIndex}>
                <div className={`w-full flex ${itemsPerRow === 1 ? 'flex-col' : 'flex-row'} justify-between gap-4`}>
                  {teamGroup.map((member, index) => (
                    <Card
                      key={index}
                      className="relative w-[340px] min-h-[585px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out"          >
                      <CardContent className="relative h-full p-0 px-3 pt-3">
                        <img
                          src={member?.image}
                          alt={member?.name}
                          className="w-full h-[280px] rounded-t-2xl object-cover"
                        />
                        <div className="px-4 mt-5">
                          <span className="text-xl font-bold">{member?.name}</span>
                          <div className='flex items-center gap-1'>
                            <h4 className="text-[#727272] font-semibold">{member?.role}</h4>
                            <Dialog>
                              <DialogTrigger asChild>
                                <button><RightArrowYellow /></button>
                              </DialogTrigger>
                              <DialogContent className="md:min-w-[900px]">
                                <DialogHeader>
                                  <div>
                                    <span className='text-[34px] font-semibold'>{member?.name}</span>
                                    <h4 className="text-[#727272] font-semibold mt-0">{member?.role}</h4>
                                  </div>
                                </DialogHeader>
                                <DialogDescription>
                                  <div className='flex gap-10 md:flex-row flex-col-reverse max-h-[400px] overflow-auto'>
                                    <div className='w-3/4'>
                                      <p className='text-[#727272] text-justify break-words hyphens-auto'>
                                        {/* Split the additionalInfo text into paragraphs */}
                                        {member?.additionalInfo.split('\n\n').map((paragraph, index) => (
                                          <p key={index}>{paragraph}</p>
                                        ))}
                                      </p>
                                    </div>
                                    <div className='w-2/4'>
                                      <img
                                        src={member?.image}
                                        alt={member?.name}
                                        className="w-full h-[280px] rounded-t-2xl object-cover"
                                      />
                                    </div>
                                  </div>
                                </DialogDescription>

                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* For below md, use buttons to navigate */}
      <div className="block md:hidden">
        <div className="flex justify-center flex-col items-center">

          <div className={`w-full flex ${itemsPerRow === 1 ? 'flex-col' : 'flex-row'} justify-between gap-4 items-center`}>
            {chunkedTeamMembers[currentIndex].map((member, index) => (
              <Card
                key={index}
                className="relative w-[340px] h-auto overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <CardContent className="relative h-full p-0 px-3 pt-3">
                  <img
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-[280px] rounded-t-2xl object-cover"
                  />
                  <div className="px-4 mt-5">
                    <span className="text-xl font-bold">{member?.name}</span>
                    <div className='flex items-center gap-3'>
                      <h4 className="text-[#727272] font-semibold">{member?.role}</h4>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button><RightArrow /></button>
                        </DialogTrigger>
                        <DialogContent className="md:min-w-[900px]">
                          <DialogHeader>
                            <div>
                              <span className='text-[34px] font-semibold'>{member?.name}</span>

                              <h4 className="text-[#727272] font-semibold">{member?.role}</h4>
                            </div>
                            <DialogDescription>
                              <div className='flex gap-10 md:flex-row flex-col-reverse max-h-[400px] overflow-auto'>
                                <div className='w-full'>
                                <p className='text-[#727272] text-justify break-words hyphens-auto'>
                                        {/* Split the additionalInfo text into paragraphs */}
                                        {member?.additionalInfo.split('\n\n').map((paragraph, index) => (
                                          <p key={index}>{paragraph}</p>
                                        ))}
                                      </p>
                                </div>
                                <div className='w-full'>
                                  <img
                                    src={member?.image}
                                    alt={member?.name}
                                    className="w-full h-[280px] rounded-t-2xl object-cover"
                                  />
                                </div>
                              </div>

                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">


                          </div>

                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='flex gap-3 pt-5'>
            <button
              onClick={handlePrev}
              className="border border-white p-4 rounded-full hover:bg-[#ffbe47]"
            >
              <LeftArrowWhite />
            </button>
            <button
              onClick={handleNext}
              className="border border-white p-4 rounded-full hover:bg-[#ffbe47]"
            >
              <RightArrowWhite />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
