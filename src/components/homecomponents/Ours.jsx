import { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import RightArrow from '../icons/RightArrow';
import LeftArrow from '../icons/LeftArrow';

const OursComponent = () => {
    const [currentView, setCurrentView] = useState('visions');
    const titles = {
        visions: "Our Vision",
        values: "Our Values",
        leadership: "Our Leadership"
    };

    const content = {
      
        visions: (<>
            <p className='text-justify break-words hyphens-auto  '>To be the premier consulting, technology, and upskilling partner, driving exceptional excellence and sustainable success for our customers. <a href="/about#visions" className='text-black font-semibold'>Read more...</a></p>
            <br />

        </>),
        values: (<>
            <p className='text-justify break-words hyphens-auto  '>
                At enxcl, our corporate values underpin every aspect of our work, steering our approach to business, client partnerships and internal collaboration. <a href="/about#values" className='text-black font-semibold'>Read More...</a>
            </p>
        </>),
        leadership: (<>
            <>
                <p className='text-justify break-words hyphens-auto  '>enxcl has a forward-thinking leadership team with over 100 years of combined
                    experience in the IT industry.The senior executives at the company have served
                    BigFours and many MNCs at leadership positions across Airline, Telecom, Manufacturing
                    and BFSI domains.With a proven track record of managing complex IT ecosystems and
                    leading large-scale transformations, our leaders are committed to fostering a culture of
                    continuous improvement and delivering exceptional value to our clients. <a href="/about#leadership" className='text-black font-semibold'>Read more...</a></p ><br />

            </>

        </>)
    };

    const changeView = (view) => setCurrentView(view);

    const goToNextView = () => {
        const keys = Object.keys(titles);
        const currentIndex = keys.indexOf(currentView);
        const nextIndex = (currentIndex + 1) % keys.length;
        setCurrentView(keys[nextIndex]);
    };

    const goToPreviousView = () => {
        const keys = Object.keys(titles);
        const currentIndex = keys.indexOf(currentView);
        const previousIndex = (currentIndex - 1 + keys.length) % keys.length;
        setCurrentView(keys[previousIndex]);
    };

    return (
        <div className="flex md:px-24 md:py-8 py-0 pb-4">
            <div className='flex justify-center w-full md:gap-14 gap-2 flex-wrap md:flex-nowrap'>
                <div className="w-1/5 p-4 flex items-center flex-col justify-center">
                    {Object.keys(titles).map((key) => (
                        <button
                            key={key}
                            onClick={() => changeView(key)}
                            className={`w-full py-2 text-left text-[22px] min-w-[200px]
                                        ${currentView === key ? 'font-bold text-gray-900' : 'text-gray-700'}`}
                        >
                            {titles[key]}
                        </button>
                    ))}
                </div>

                <Card className="w-4/5 md:p-5 p-2 bg-white flex flex-col md:min-w-[600px] border-0 shadow-2xl" id='shadow'>
                    <CardHeader>
                        <CardTitle className='md:text-[30px] text-[25px] font-bold'>{titles[currentView]}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-[18px] max-h-[500px] min-h-[500px] md:max-h-[175px] md:min-h-[175px] flex items-center overflow-auto md:overflow-hidden'>
                        {content[currentView]}
                    </CardContent>
                    <div className="flex gap-5 pl-5 pt-3">
                        <button
                            onClick={goToPreviousView}
                            className="border border-black p-4 rounded-full hover:bg-[#ffbe47]  w-[47px] flex justify-center items-center"
                        >
                            <LeftArrow />
                        </button>
                        <button
                            onClick={goToNextView}
                            className="border border-black p-4 rounded-full hover:bg-[#ffbe47] w-[47px] flex justify-center items-center"
                        >
                            <RightArrow />
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default OursComponent;