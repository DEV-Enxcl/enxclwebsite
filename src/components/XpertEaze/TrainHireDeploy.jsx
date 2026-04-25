import XpertEaze2 from '@/assets/XpertEaze2.webp'
const TrainHireDeploy = () => {
    return (
        <div className='flex flex-col pt-5  flex-wrap md:flex-nowrap'>

            <div className=" flex justify-between flex-wrap md:flex-nowrap items-center flex-col md:flex-row">
                <div className='md:w-3/4 w-full pt-4 md:pt-0'>
                    <span className='font-bold text-[38px]'>Corporate Training</span>
                    <div className='flex flex-col gap-2'>
                    <p className="mt-6 text-justify text-black">XpertEaze offers customized corporate training programs tailored to the client’s organizational vision, catering to all levels from entry to leadership. We begin by assessing the current state and defining the future requirements based on specific roles, whether in delivery leadership, product management, service management, implementation management, business analysis, quality assurance, or technical positions. Our expertise allows us to identify skill gaps and deliver targeted training programs. 
                    </p>
                    <p className="mt-6 text-justify text-black">
                    As a premier Authorized Training Partner of the Project Management Institute (PMI) globally, we offer Project Management and Agile training led by highly sought-after industry experts with decades of experience. Additionally, we provide individualized coaching and mentoring to ensure professionals and leaders are upskilled, driving both personal development and organizational growth.
                    </p>
                    </div>
                 
                </div>
                <div className='md:w-2/4 w-full flex justify-center md:justify-end'>
                    <img src={XpertEaze2} alt=" " className="w-[350px] h-[400px] mt-6 rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default TrainHireDeploy;