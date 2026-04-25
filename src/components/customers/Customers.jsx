import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CustomersIcon from "../icons/CustomersIcon";
import RightArrowWhite from "../icons/RightArrowWhite";
import LeftArrowWhite from "../icons/LeftArrowWhite";

const reviews = [
    {
        name: "Prathap Chandran",
        position: "Director & CTO, Beagle Cyber Innovations Pvt. Ltd.",
        text: (
            <>
                <p>
                    &quot;We appreciate your effort for helping us to grow our organization to next level by enhancing our employees management skills. Your syllabus and way of training is just amazing! I hope it will definitely help our employees to grow as future managers.&quot;
                </p>
            </>
        ),
    },
    {
        name: "Chandrasekaran A",
        position: "Founder Director, InfoCareer Private Limited",
        text: (
            <>
                <p>
                    &quot;Our association with enxcl is almost a year now, in utilising your services in Technical Training. Testing Strategic Consulting Enxcl is awesome and very proactive. You have highly competent, customer-centric, and highly dedicated team of folks. It was a pleasure associating with enxcl as &apos;Partner&apos; and we will not hesitate to recommend &apos;enxcl&apos; to anyone blindly. All the very best to you and your enxcl teams. Looking forward to a long-term association.&quot;
                </p>
            </>
        ),
    },
    {
        name: "Shyam Krishnan",
        position: "CEO, Simplogics Solutions",
        text: (
            <>
                <p>
                    &quot;enxcl is a great partner to work with. Right from the start, enxcl team is clear on expectations, responsive to feedback, and works in a very structured way in building and positioning our products. We are happy to have collaborated with a team that&apos;s professional, diligent, and committed in a way that makes us feel that they are not an external partner, but an extension of our team.&quot;
                </p>
            </>
        ),
    },

];

const Customers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    // Automatically slide the carousel every 3 seconds only on desktop
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // &apos;md&apos; in Tailwind starts at 768px
        };

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize); // Listen to resize events

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 3000); // Slide every 3 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [isDesktop]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="bg-cover bg-fixed bg-[url('/src/assets/background2.webp')] h-auto md:px-24 py-8 p-8">
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <h3 className="flex text-[#ffbe47] justify-center gap-2">
                        <CustomersIcon /> What Customers Speak About Us
                    </h3>
                    <span className="text-[30px] md:text-[44px] font-bold mb-6 text-white">
                        Customer First, Always
                    </span>
                </div>
            </div>

            {/* For md and above, show carousel with sliding transition */}
            <div className="hidden md:flex justify-center">
                <Carousel className="w-full max-w-screen-xl">
                    <CarouselContent
                        className={`transition-transform duration-700 ease-in-out ${isDesktop ? '' : 'transform-none'}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide animation
                    >
                        {reviews.map((review, index) => (
                            <CarouselItem key={index}>
                                <div className="p-4 flex flex-col items-center">
                                    <Card className="min-h-[260px] min-w-[300px]">
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <h2 className="text-xl font-bold">{review.name}</h2>
                                            <h3 className="text-lg font-semibold mb-4">{review.position}</h3>
                                            <p className="text-base">{review.text}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* For below md, static card without sliding */}
            <div className="block md:hidden">
                <div className="flex justify-center items-center flex-col">

                    <div className="p-4 flex flex-col items-center">
                        <Card className="max-h-[460px] min-h-[460px] min-w-[300px]">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <h2 className="text-xl font-bold">{reviews[currentIndex].name}</h2>
                                <h3 className="text-lg font-semibold mb-4">{reviews[currentIndex].position}</h3>
                                <p className="text-base">{reviews[currentIndex].text}</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex gap-3">
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

export default Customers;