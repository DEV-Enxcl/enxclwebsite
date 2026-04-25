import Business from '@/assets/itexs.webp'
import InitialHeader from '@/components/initialheader/InitialHeader';
import IT from '@/assets/it.webp'
import Broucher from '@/components/icons/Broucher';
import QuotesImgae from '@/assets/quotesImage.webp'
import techconsulting from '@/assets/techconsulting.webp'
import managedservices from '@/assets/managedservices.webp'
import techservices from '@/assets/techservices.webp'

const ITExS = () => {
    const title = "ITExS";
    const mainTitle = "IT Excellence Services";
    return (
        <>
            <div className="pt-24 py-8 md:px-24 px-8">
                <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
                {/* Architecting the Future of IT Excellence */}
                <div className="flex py-8 justify-between flex-wrap md:flex-nowrap">
                    <div className="md:w-2/4 w-full">
                        <div className="md:max-w-[360px] ">
                            <img src={IT} alt="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="md:w-3/4 w-full">
                        <span className="text-[38px] font-bold">
                            Architecting the Future of IT Excellence
                        </span>
                        <p className="text-justify break-words hyphens-auto pt-5 text-black">
                            Our IT Excellence services verticle is dedicated to delivering a sophisticated portfolio of IT solutions, meticulously curated to empower businesses with cutting-edge technology and expert guidance. Our IT Excellence Services excel in delivering holistic end-to-end services across three core pillars: Technology Consulting, Software Development, and Managed Services. Each service is crafted with precision to optimize your technology needs, foster innovation and enable your business to focus on strategic objectives. Our IT services are strategically aligned with cutting-edge agile technologies ensuring your products are primed for the future. We prioritize innovation and adaptability, empowering your business to excel in a dynamic digital landscape while sustaining a formidable competitive advantage.
                        </p>
                    </div>

                </div>
                {/* Services we provide */}
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
                    <span className="text-[38px] font-bold">
                        Services we provide
                    </span>
                    <button className="w-[220px] font-semibold p-5 h-[50px] md:flex hidden justify-center items-center bg-[#aaaaaa] cursor-not-allowed rounded-3xl gap-2">Download Brochure<Broucher /></button>
                </div>
                {/* Technology Consulting */}
                <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col gap-10">
                <div className="text-justify">
                    <span className="text-[24px] font-semibold ">
                        Technology Consulting
                    </span>
                    <ul className="text-black list-disc pl-5 pt-2">
                        <li>
                            <p><span className='text-black font-semibold'>Architecture Consulting:</span> We provide expert guidance in designing scalable, secure, and efficient IT solutions which ensures that your technology systems align with business goals while fostering innovation and long-term operational success.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Technology Architecture:</span> We evaluate and design technology architectures to ensure they align with your business goals, support scalability, and incorporate the latest advancements in technology.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Solution Architecture:</span> Our experts assess existing solution architectures to identify areas of improvement or help create new ones that address specific business needs while ensuring interoperability and efficiency.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Deployment Architecture:</span> We consult on the optimal deployment strategies, whether on-premise, cloud, or hybrid environments, ensuring a smooth and secure deployment process.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Information Security (InfoSec) Architecture:</span> Security is integral to our consulting approach. We review and design InfoSec architectures to protect your assets ensuring compliance with industry standards and regulations.</p>
                        </li>
                    </ul>

                </div>
                <img src={techconsulting} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
                </div>
                {/* quotes */}
                <div className="bg-[#ffb451] shadow-xl p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                        In today’s fast-paced technological landscape, a <span className='font-bold'>robust and scalable </span>architecture is essential for business success. Our Technology Consulting services offer strategic guidance and actionable solutions across all architectural dimensions. Whether you are developing a new product or enhancing an existing system, our consultants deliver profound insights into <span className='font-bold'>architectural best practices, scalability strategies</span>, and <span className='font-bold'>security frameworks</span>, ensuring your long-term success.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[170px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                {/* Technology Services */}
                <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col-reverse gap-10">
                <img src={techservices} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
                <div className="text-justify">
                    <span className="text-[24px] font-semibold ">
                        Technology Services
                    </span>
                    <ul className="text-black list-disc pl-5 pt-2">
                       
                        <li>
                            <p>We specialize in developing enterprise business applications and full-stack solutions that cater to complex business needs. Our expertise spans various industries, ensuring that our solutions are both robust and adaptable.</p>
                        </li>
                        <li>
                            <p>Our capabilities extend to Artificial Intelligence (AI) and Machine Learning (ML) projects, enabling businesses to leverage data-driven insights and automation.</p>
                        </li>
                        <li>
                            <p>We are also adept at creating immersive experiences through Metaverse development, tapping into the potential of virtual reality and augmented reality.</p>
                        </li>
                        <li>
                            <p>In the realm of data analytics, we build solutions that turn data into actionable insights, empowering businesses to make informed decisions.</p>
                        </li>
                        <li>
                            <p>Our proficiency in Robotic Process Automation (RPA) ensures that repetitive, manual processes are automated, leading to increased operational efficiency.</p>
                        </li>
                    </ul>

                </div>
                </div>
                {/* quotes */}
                <div className="bg-[#ffb451] shadow-xl p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                        Each software project we undertake is driven by a commitment to excellence utilizing the latest technologies and methodologies to deliver solutions that exceed client expectations.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[70px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                {/* Managed Services */}
                <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col gap-10">
                <div className="md:w-3/5 w-full text-justify">
                    <span className="text-[24px] font-semibold ">
                        Managed Services
                    </span>
                    <ul className="text-black list-disc pl-5 pt-2">
                        <li>
                            <p><span className='text-black font-semibold'>Quality Assurance (QA) as a Service:</span> We provide end-to-end QA services, ensuring that your products meet the highest standards of quality. This includes everything from test case development to manual testing, automation testing, performance testing, usability testing, and security testing</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Implementation Management as a Service:</span> Our team manages smooth transition of your products from development to production. We handle the entire lifecycle, including staging and production environment setup, transition planning, training material preparation, and production rollout.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Service Management as a Service:</span> We design and implement comprehensive service management models based on the ITIL framework. This includes setting up Level 0 to Level 4 support, selecting and deploying appropriate tools, and establishing processes that ensure seamless operations. Post-implementation, we can also manage your service operations, ensuring continuous and reliable performance.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>Business Analysis as a Service:</span> Our business analysts provide critical insights into your processes and systems, identifying opportunities for improvement and ensuring that your projects align with strategic goals.</p>
                        </li>
                        <li>
                            <p><span className='text-black font-semibold'>PMO as a Service:</span> Provides expert project management support, including governance, resource management, and risk oversight, without the need for an in-house PMO.</p>
                        </li>
                    </ul>

                </div>
               <div className='md:w-2/5 w-full flex justify-center items-center pt-6'>
               <img src={managedservices} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-3"/>
               </div>
                </div>
                {/* quotes */}
                <div className="bg-[#ffb451] shadow-xl p-3 rounded-xl flex mt-8">
                    <h3 className="text-justify">
                        Our Managed Services, branded as <span className='font-bold'>“Service as a Service,”</span> are designed to offload the complexities of IT and business operations from your shoulders, allowing you to concentrate on your core competencies. We offer a range of services that can be tailored to meet the specific needs of your organization.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[120px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default ITExS