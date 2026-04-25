import industryUp from '@/assets/industryskilling.webp'
import Broucher from '../icons/Broucher';
const IndustrySkilling = () => {
    return (
        <div className='flex flex-col pt-5  flex-wrap md:flex-nowrap'>

            <div className=" flex justify-between flex-wrap md:flex-nowrap items-center flex-col-reverse md:flex-row">
            <div className='md:w-2/4 w-full flex justify-center md:justify-start'>
                    <img src={industryUp} alt=" " className="w-[350px] h-[500px] mt-6 rounded-2xl" />
                </div>
                <div className='md:w-3/4 w-full pt-4 md:pt-0'>
                <div className='flex flex-col gap-7'>
               
                    <div className='flex flex-col gap-2'>
                    <span className='font-bold text-[38px]'>Train-Hire-Deploy</span>
                        <p className="text-justify text-black">In the Train-to-Hire model, XpertEaze carefully selects candidates aligned with a company’s technical requirements and provides them with tailored training. Companies can then assess and hire these candidates to meet their specific needs. With the Train-Hire-Deploy program, companies choose the right candidates, and XpertEaze partners with them to deliver customized training programs, ensuring candidates are fully equipped for their roles.
                        </p>
                        {/* <p className="mt-6 text-justify text-black">
                            As a premier Authorized Training Partner of the Project Management Institute (PMI) globally, we offer Project Management and Agile training led by highly sought-after industry experts with decades of experience. Additionally, we provide individualized coaching and mentoring to ensure professionals and leaders are upskilled, driving both personal development and organizational growth.
                        </p> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                    <span className='font-bold text-[38px]'>Industry Skilling</span>
                        <p className="text-justify text-black">XpertEaze is dedicated to bridging the gap between academia and industry, which inspired us to design tailored programs for colleges and fresh graduates. Drawing on years of industry experience, we empower students to excel both academically and in the professional world. We offer comprehensive, job-oriented courses featuring live projects, placement support, and preparation for global certifications. XpertEaze partners with professional colleges to deliver value-added skill development programs.
                        </p>
                        {/* <p className="mt-6 text-justify text-black">
                            As a premier Authorized Training Partner of the Project Management Institute (PMI) globally, we offer Project Management and Agile training led by highly sought-after industry experts with decades of experience. Additionally, we provide individualized coaching and mentoring to ensure professionals and leaders are upskilled, driving both personal development and organizational growth.
                        </p> */}
                    </div>
                    <div className='flex justify-end'>
               <button className="w-[220px] font-semibold p-5 h-[50px] md:flex hidden justify-center items-center bg-[#aaaaaa] cursor-not-allowed rounded-3xl gap-2">Download Brochure<Broucher /></button>
               </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrySkilling;