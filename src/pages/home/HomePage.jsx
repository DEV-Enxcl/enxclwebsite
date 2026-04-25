

import Customers from "@/components/customers/Customers"
import NewsAndInsights from "@/components/newsandinsights/NewsAndInsights"
import OurServices from "@/components/ourservices/OurServices"
import SolutionCards from "@/components/SolutionCards/SolutionCards"

const HomePage = () => {
    const title = "BLOGS"
    const sectitle = "News and Insights"
    return (
        <>
            <div className="md:px-14 md:pb-10 md:pt-20 pt-16">
                <div className="bg-cover bg-sticky bg-[url('/src/assets/background.webp')] md:h-[590px] h-screen flex md:justify-between justify-center flex-col md:rounded-2xl rounded-none">
                    <div className="flex flex-col md:h-full w-full  md:px-8 md:pb-10 pb-0 px-8 ">
                        <div className="flex flex-wrap gap-2 md:pt-20 w-2/4">
                            <span className="text-white md:text-[56px] text-[50px] font-bold ">
                                enhancing
                            </span>
                            <span className="text-[#ffbe47] md:text-[56px] text-[50px] font-bold">
                                excellence
                            </span>
                        </div>
                        <div className="bg-[#16171700] text-white md:w-2/4 w-full text-[15px] pr-5">
                            <div className="pt-3">
                                <p className='text-justify break-words'>enxcl Business Solutions Private Limited, established in 2020, is a premier business and management consulting, technology services, and professional upskilling firm. We empower organizations to enhance their business prospects by offering services across multiple verticals and serving global clients. Our organization comprises world-class experts with rich technical, process, and management expertise across major industry segments, driving growth for startups, scale-ups, and corporations alike.</p><br />
                                <p className='text-justify break-words'> enxcl’s Services has emerged as a navigator for businesses, helping them set up centers of excellence through sustainable practices and enhancing human elements. With a deep understanding of industry dynamics and a world-class curriculum, enxcl delivers innovative, insightful, and industry-relevant training programs to corporates, professionals, and aspiring talents.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <div ref={oursRef}>
                <OursComponent />
            </div> */}
            <OurServices />
            <SolutionCards />
            <Customers />
            <NewsAndInsights title={title} sectitle={sectitle}/>
        </>
    )
}

export default HomePage