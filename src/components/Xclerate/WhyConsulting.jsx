import Xclerate6 from '@/assets/Xclerate6.webp'
const WhyConsulting = () => {
    return (
        <div className="md:px-24 px-8 mt-8 py-8 flex justify-between flex-wrap md:flex-nowrap items-center bg-[#161717] flex-col md:flex-row">
        <div className='w- full md:w-2/4 mb-6 md:mb-0'>
            <span className="text-[38px] font-bold text-white">Why Business and Management Consulting at enxcl ?</span>
            <p className="mt-6  text-justify text-white">enxcl distinguishes itself as a leading consulting firm, driven by its proven expertise and a team of seasoned professionals who bring decades of experience from top global firms. This deep industry knowledge, coupled with hands-on expertise, enables us to deliver insights and solutions that are both practical and transformative. Recognizing the unique nature of each business, we customize our consulting services to precisely meet your specific needs, ensuring that our strategies are not only effective but also seamlessly aligned with your organizational culture and objectives. Our unwavering commitment to excellence is evident in our dedication to providing the highest standards of service, characterized by transparency and accountability.
            </p>
            <p className="mt-6  text-justify text-white">We empower clients to achieve business goals efficiently and sustainably by combining global best practices with local insights. Our consulting services build strong partnerships that drive meaningful change and enduring success, whether you&apos;re a startup, a growing corporation, or an enterprise in transformation. enxcl’s tailored strategies help businesses navigate complexities, drive innovation, and maintain a competitive edge at every growth stage.
            </p>
         </div>
         <div className='w- full md:w-2/4 flex justify-end'>
         <img src={Xclerate6} alt=" " className="w-[400px] rounded-2xl" />

         </div>
    </div>
    );
};

export default WhyConsulting;