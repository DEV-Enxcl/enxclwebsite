import InitialHeader from "@/components/initialheader/InitialHeader"
import Bulb from "@/assets/bulb.webp"
import Business from '@/assets/business.webp'
import offshore from '@/assets/offshore.webp'
import techForward from '@/assets/tech.webp'
import manpower from '@/assets/manpower.webp'
import buldleservice from '@/assets/buldleservice.webp'
import Broucher from "@/components/icons/Broucher"
const BusinessEnablement = () => {
  const title="BizExS";
  const mainTitle="Business Enablement Services";
  return (
    <>
      <div className="pt-24 py-8 md:px-24 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Business}/>
        {/* Facilitating growth through Sustainable Excellence */}
        <div className="flex py-8 justify-between flex-wrap md:flex-nowrap">
          <div className="md:w-3/4 w-full">
            <span className="text-[38px] font-bold">
              Facilitating growth through sustainable excellence
            </span>
            <p className="text-justify break-words  pt-5 text-black">
            BizExS specializes in creating sustainable business processes offering offshore development capabilities and setting up captive units fully integrated with clients&apos; global operations. We excel in consulting on best practices and process optimization, ensuring efficient, scalable and sustainable business operations. Our tech-forward operational facilities are equipped with state-of-the-art infrastructure, supporting seamless IT operations. Additionally, we provide comprehensive manpower management services, including talent acquisition, HR management, and staff augmentation. Our bundled service offerings are customized to meet specific client needs enhancing operational efficiency and driving long-term success.
            </p>
          </div>
          <div className="md:w-2/4 w-full flex justify-end">
            <div className="md:max-w-[360px] mt-4 md:mt-0">
              <img src={Bulb} alt="" className="rounded-[20px]" />
            </div>
          </div>
        </div>
        {/* Services we provide */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <span className="text-[38px] font-bold">
            Services we provide
          </span>
          <button className="w-[220px] font-semibold p-5 h-[50px] md:flex hidden justify-center items-center bg-[#aaaaaa] cursor-not-allowed rounded-3xl gap-2">Download Brochure<Broucher /></button>
        </div>
        {/* Sustainable Business Processes */}
        <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col-reverse gap-10">
        <img src={offshore} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
        <div className="text-justify break-words hyphens-auto">
          <span className="text-[24px] font-semibold ">
          Offshore Development Capability 
          </span>
          <ul className="text-black list-disc pl-5 pt-3">
            <li>
              <p><span className='text-black font-semibold'>Competency and Practice Development:</span> We work closely with clients to build essential competencies, ensuring alignment with strategic goals and industry best practices. These practices are foundational to the sustainability and success of offshore operations.</p>
            </li>
            <li>
              <p><span className='text-black font-semibold'>Build-Operate-Transfer (BOT) Model:</span> We offer a flexible BOT model where we not only build and operate Offshore Development Centers (ODCs) but also transfer full control to the client once fully established. Alternatively, we can continue to manage the ODC, enabling clients to focus on their core business while maintaining sustainable operational efficiency.</p>
            </li>
            <li>
              <p><span className='text-black font-semibold'>Captive Unit Setup:</span> We assist in setting up captive units fully integrated with the client’s global operations, maintaining the same efficiency and quality standards as the client’s in-house teams to ensure long-term sustainability.</p>
            </li>
          </ul>

        </div>
        </div>
        {/* Tech-Forward Operational Facilities */}
        <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col gap-10">
        <div className="pt-5 ">
          <span className="text-[24px] font-semibold">
          Tech-Forward Operational Facilities
          </span>
         
          <ul className="text-black list-disc pl-5 pt-3 text-justify break-words hyphens-auto">
            <li>
              <p><span className='text-black font-semibold '>Tech-Forward Operational Facilities:</span> We provide state-of-the-art operational facilities in prime IT hubs across Kerala and other parts of India, equipped with the latest technology, security features, and network capabilities to support seamless operations.</p>
            </li>
            <li>
              <p><span className='text-black font-semibold'>Physical and IT Infrastructure Setup:</span> We build and manage physical office spaces designed to foster collaboration and innovation. Our advanced IT infrastructure, including secure networks, firewalls, servers, and other assets, ensures maximum efficiency and security for offshore development centers.</p>
            </li>
          </ul>
        </div>
        <img src={techForward} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
        </div>
        {/* Resource Augmentation */}
        <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col-reverse gap-10">
        <img src={manpower} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
        <div className="pt-5 text-justify break-words hyphens-auto">
          <span className="text-[24px] font-semibold">
          Manpower Management
          </span>
        
          <ul className="text-black list-disc pl-5 pt-3">
            <li>
              <p><span className='text-black font-semibold'>Comprehensive Hiring Services:</span> We manage the entire recruitment process for both permanent and contract positions, ensuring access to the right talent at every level. We also offer specialized training and upskilling programs to build necessary competencies within teams.</p>
            </li>
            <li>
              <p><span className='text-black font-semibold'>HR Management:</span> Our services include payroll, legal compliance, employee benefits, and administration, ensuring that all employees are managed according to local laws and international best practices.</p>
            </li>
            <li>
              <p>
              <span className='text-black font-semibold'>Staff Augmentation:</span> We offer staff augmentation services to help clients scale their teams quickly and efficiently, providing temporary staffing solutions to meet short-term project needs or fill critical gaps.
              </p>
            </li>
          </ul>
        </div>
        </div>
        {/* Bundled and Customized Service Offerings */}
        <div className="pt-8 flex justify-between md:flex-nowrap md:flex-row flex-col gap-10">
        <div className="pt-5 text-justify break-words hyphens-auto">
          <span className="text-[24px] font-semibold">
          Bundled and Customized Service Offerings
          </span>
        
          <ul className="text-black list-disc pl-5 pt-3">
            <li>
              <p><span className='text-black font-semibold'>Offshore Development Capability Package:</span> A comprehensive package that includes physical and IT infrastructure, manpower management, competency development, and all related services to operate an ODC, customized to meet client-specific needs</p>
            </li>
            <li>
              <p><span className='text-black font-semibold'>Captive Unit Setup Package:</span> A turnkey solution for building, operating, and potentially transferring a captive unit with full delivery responsibility.</p>
            </li>
            <li>
              <p>
              <span className='text-black font-semibold'>Competency Building and Hiring Services Package:</span> A focused offering that provides specialized hiring, training, and upskilling services to build high-performance teams.
              </p>
            </li>
            <li>
              <p>
              <span className='text-black font-semibold'>Consulting and Best Practices Package:</span> Designed for clients aiming to optimize processes and adopt industry best practices for sustainable growth and efficiency.
              </p>
            </li>
          </ul>
        </div>
        <img src={buldleservice} alt=" " className="w-[480px] h-[350px] rounded-2xl mt-4 md:mt-0"/>
        </div>
      </div>
    </>
  )
}

export default BusinessEnablement