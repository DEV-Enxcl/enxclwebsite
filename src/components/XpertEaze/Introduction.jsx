import XpertEazeIntro from '@/assets/XpertEazeIntro.webp'
import QuotesImgae from '@/assets/quotesImage.webp'
import Broucher from '../icons/Broucher';

const Introduction = () => {
    return (
        <div className="pt-10 flex justify-between flex-col md:flex-row items-center mt-8">
            <div className='md:w-2/4 w-full flex md:justify-start justify-center mt-4 md:mt-0 items-start'>
                <img src={XpertEazeIntro} alt=" " className="w-[480px] h-[350px] rounded-2xl " />

            </div>
            <div className='md:w-3/4 w-full md:pl-10'>
                <div className="bg-[#ffb451] shadow-xl p-3 rounded-xl flex mt-10 md:mt-0">
                    <h3 className="text-justify">
                        enxcl’s deep understanding of the industry enables us to impart innovative, insightful, and industry relevant training programs to corporates, professionals, and aspirants throughs <span className='font-bold'>XpertEaze</span>, the professional upskilling vertical.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[170px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                <p className="mt-6 text-justify text-black">enxcl's profound industry acumen empowers us to offer innovative, insightful, and contextually relevant training solutions via XpertEaze, our dedicated upskilling division for professionals. XpertEaze offers various tailored and customized trainings for corporates to up-skill and cross-skill professionals from entry level to senior leadership. Being one of the Premier Authorized Training Partners of Project Management Institute (PMI) globally, we deliver Project Management and Agile trainings through sought-after industry experts having many decades of experience. With XpertEaze, enxcl bridges the academic-industry divide and cultivate a workforce ready to meet the challenges of today's dynamic business environment
                </p>
               <div className='flex justify-end mt-10'>
               <button className="w-[220px] font-semibold p-5 h-[50px] md:flex hidden justify-center items-center bg-[#aaaaaa] cursor-not-allowed rounded-3xl gap-2">Download Brochure<Broucher /></button>
               </div>
            </div>

        </div>
    );
};

export default Introduction;