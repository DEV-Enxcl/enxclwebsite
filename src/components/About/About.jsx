import overlapImage from "../../assets/overlap-image.webp";
import QuotesImage from "../../assets/Quotes-Img.webp";
import VisionImage from "../../assets/vision.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommitmentIcon from "../icons/CommitMent/Commitment";
import IntegrityIcon from "../icons/integrity/IntegrityIcon";
import QualityIcon from "../icons/Quality/QualityIcon";
import PassionIcon from "../icons/Passion/PassionIcon";
import RespectIcon from "../icons/Respect/RespectIcon";
import CeoImage from "../../assets/CEOimage.webp";
import ArunSreeImage from "../../assets/Arun_sreekumar.webp";
import JaiShankar from "../../assets/JaiShankar.webp";
import ArunRavi from "../../assets/ArunRavi.webp"
import NttData from "../../assets/NttData.webp";
import TeraData from "../../assets/TeraData.webp";
import Quest from "../../assets/Quest.webp";
import SFO from "../../assets/SFO.webp";
import Innovature from "../../assets/Innovature.webp";
import TestHouse from "../../assets/TestHouse.webp";
import { useNavigate } from "react-router-dom";
// import LeaderShip from './Leadership'
import InApp from "../../assets/inapp.webp"
import Travancore_Analytics from "../../assets/Travancore_Analytics.webp"
import Crown from "../../assets/Crown.webp"
import HR_Block from "../../assets/H&R_Block.webp"
import Guidehouse from "../../assets/Guidehouse_logo.webp"
import Nest from "../../assets/Nest.webp"
import Beagle from "../../assets/Beagle_blue_1@2x.webp"
import PMI from "../../assets/PMI.webp"
import SIP from "../../assets/sip-abacus_logo.webp"
import StMicheals from "../../assets/St.Michael's_Cherthala.webp"
import CarmelEngg from "../../assets/CarmelEngg.webp"
import JaleelHoldings from "../../assets/jaleel_holdings.webp"
import Simplogics from "../../assets/Simplogics.webp"
import RightArrow from "../icons/RightArrow";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RightArrowYellow from "../icons/RightArowyellow";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import QualityPolicyTailwind from "./QualityPolicy";

const About = () => {
  //Our Values
  const ourValuesData = [
    {
      id: "1",
      icon: <CommitmentIcon />,
      header: "Commitment",
      content:
        "Our commitment to our clients, partners, and employees drives us to go beyond expectations, ensuring that every engagement is executed with the highest level of professionalism and precision.",
    },
    {
      id: "2",
      icon: <IntegrityIcon />,
      header: "Integrity",
      content:
        "Integrity is the bedrock of our business practices. We conduct ourselves with honesty, transparency, and ethical rigor, fostering trust and building long-lasting relationships with our clients and stakeholders. ",
    },
    {
      id: "3",
      icon: <QualityIcon />,
      header: "Quality",
      content:
        "Quality is the hallmark of our work. We uphold the highest standards in every aspect of our operations, from the strategies we devise to the solutions we implement. .",
    },
    {
      id: "4",
      icon: <PassionIcon />,
      header: "Passion",
      content:
        "We approach every challenge with enthusiasm and a genuine desire to innovate, knowing that our passion is key to unlocking creative solutions and driving meaningful progress for our clients.",
    },
    {
      id: "5",
      icon: <RespectIcon />,
      header: "Respect",
      content:
        "We value the diverse perspectives, talents, and contributions of every individual within our organization and those we collaborate.",
    },
  ];

  const teamMembers = [
    {
      name: 'Santhosh Udayanan',
      role: 'Founder and Managing Director',
      image: CeoImage,
      additionalInfo: 'With over 25 years of experience, Santhosh is a recognized expert in IT Leadership, Process Excellence, and Enterprise-wide Transformation, having partnered with Ernst & Young (EY) and several global corporations. As the founder of enxcl Business Solutions, he drives business excellence, professional excellence and technology innovation. Santhosh is the architect behind the e-ASTO framework, which integrates Lean, Agile, Six Sigma, and Change Management principles. His leadership has earned him multiple accolades, including EY’s Leadership in IT award. He is also a highly sought-after keynote speaker and a thought leader in the industry.'
    },
    {
      name: 'Arun Ravi',
      role: 'Chief Executive Officer',
      image: ArunRavi,
      additionalInfo: 'With over 20 years of industry experience, Arun Ravi is a seasoned business leader and agile transformation expert. Specializing in business strategy, agile coaching, and quality management, Arun has held key roles, including Associate Director at KPMG India, leading business development and agile initiatives. His leadership extends to Synapse Mentoring and Norfishco DMCC, where he advanced quality assurance and test management practices.\n\n Arun\'s expertise covers enterprise architecture, process consulting, and software quality management, with a strong foundation in CMMI and Agile methodologies. He has a proven track record of driving efficiency, innovation, and leading teams to excellence across global markets.'
    },
    {
      name: 'Jaishankar Menon',
      role: 'Chief Operating Officer',
      image: JaiShankar,
      additionalInfo: 'With over 32 years of experience in IT leadership and business operations, Jaishankar Menon brings deep expertise in IT strategy, Risk Management, and Operational Excellence. Prior to enxcl, Jaishankar held senior roles in Nissan Digital, Ernst & Young (EY), Congnizant and TCS where he successfully led high-performance teams and large-scale global programs. His ability to align business strategies with operational goals has consistently driven sustainable growth and efficiency.'
    },
    {
      name: 'Arun Sreekumar',
      role: 'Chief Delivery Officer',
      image: ArunSreeImage,
      additionalInfo: 'Arun Sreekumar brings over 30 years of deep expertise in IT delivery management across global organizations. His extensive experience includes holding key leadership positions at Ernst & Young (EY), where for nearly 16 years, he led strategic initiatives that transformed operations. Arun spearheaded numerous high-impact projects focused on digital transformation and cloud migration, delivering significant improvements in operational efficiency for major clients.'
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const toBusinessEnablement = () => {
    navigateTo('/bizexs');
  };
  const toITExS = () => {
    navigateTo('/itexs');
  };

  const toXcelerate = () => {
    navigateTo('/xclerate');
  };
  const toXpertEaze = () => {
    navigateTo('/xperteaze');
  };

  useEffect(() => {
    if (location.hash) {
      const targetDiv = document.querySelector(location.hash);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);



  const logos = [
    { src: TeraData, alt: "TeraData" },
    { src: NttData, alt: "NttData" },
    { src: Quest, alt: "Quest" },
    { src: SFO, alt: "SFO" },
    { src: Innovature, alt: "Innovature" },
    { src: TestHouse, alt: "TestHouse" },
    { src: InApp, alt: "InApp" },
    { src: Travancore_Analytics, alt: "Travancore Analytics" },
    { src: Crown, alt: "Crown" },
    { src: HR_Block, alt: "H&R Block" },
    { src: Guidehouse, alt: "Guidehouse" },
    { src: Nest, alt: "Nest" },
    { src: Beagle, alt: "Beagle" },
    { src: PMI, alt: "PMI" },
    { src: SIP, alt: "SIP Abacus" },
    { src: StMicheals, alt: "St'Micheal's" },
    { src: CarmelEngg, alt: "Carmel college" },
    { src: JaleelHoldings, alt: "JaleelHoldings" },
    { src: Simplogics, alt: "Simplogics" },
  ];

  return (
    <>
      {/*image and description */}
      <div className="md:px-24 pt-24 px-5">
        <div className="flex justify-around bg-black items-center p-8 rounded-2xl md:flex-row flex-col">
          <div className=" p-2 rounded-lg">
            <span className="text-5xl md:7xl text-white font-bold">
              Corporate <span className="text-[#ffbe47]">Overview</span>
            </span>
          </div>
          <div className="max-w-[600px] mb-[-68px]">
            <img
              className="w-[250px] md:w-[450px]"
              src={overlapImage}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* About enxcl */}
      <section >
        <div className="md:px-24 px-8" id="aboutenxcl">
          <div className="md:mt-[100px] mt-[50px]" >
            <div className="flex flex-col justify-between gap-2">
              <div className="w-full pr-0 md:mt-[-30px] md:mt[10px]">
                <span className="text-[38px] font-bold pb-5">About enxcl</span>

                <p className="text-justify text-black">
                  enxcl Business Solutions, a burgeoning leader in the fields of Business and
                  Management Consulting, Technology Consulting and Services, Business
                  Enablement Services, and Corporate and Professional Upskilling. At the heart
                  of enxcl Business Solutions is our dedication to excellence and innovation,
                  underpinned by a team of seasoned professionals and experts committed to
                  driving success for our clients. We blend strategic insights with practical
                  expertise across our service offerings to deliver impactful solutions.
                </p>

                <br />

                <p className="text-justify w-full text-black">
                  <span className="font-semibold text-black">
                    Business and Management Consulting:
                  </span>{" "}
                  enxcl stands out in the Business and Management Consulting industry by
                  prioritizing actionable results over extensive planning and leveraging a
                  deep pool of experienced consultants. The proprietary e-ASTO framework,
                  embodying &quot;Assess – Strategize – Transform – Optimize,&quot; integrates
                  best practices from Lean, Agile, and Six Sigma to deliver comprehensive
                  solutions. enxcl offers a wide array of advisory services, from strategic
                  consulting to enterprise transformation, tailored to empower startups,
                  scale-ups and corporates, while fostering a sustainable ecosystem for
                  long-term client growth.
                </p>

                <p>
                  <span
                    className="font-bold text-[#c06f23] cursor-pointer"
                    onClick={toXcelerate}
                  >
                    Learn More...
                  </span>
                </p>

                <br />

                <p className="text-justify text-black">
                  <span className="font-semibold text-black">
                    Technology Consulting and Services:
                  </span>{" "}
                  Our Technology Consulting services are dedicated to transforming your
                  business challenges into opportunities. We provide comprehensive guidance
                  on utilizing technology effectively to achieve your strategic objectives.
                  Whether it&apos;s developing forward-thinking IT strategies, implementing
                  cutting-edge solutions, or optimizing your technology infrastructure, our
                  seasoned consultants are here to pave the way. We specialize in identifying
                  and bridging technology gaps, ensuring your business is resilient, agile,
                  and ready for the future.
                </p>

                <p>
                  <span
                    className="font-bold text-[#c06f23] cursor-pointer"
                    onClick={toITExS}
                  >
                    Learn More...
                  </span>
                </p>

                <br />

                <p className="text-justify text-black">
                  <span className="font-semibold text-black">
                    Business Enablement Services:
                  </span>{" "}
                  enxcl recognizes that the bedrock of any successful business lies in how
                  well it&apos;s structured. enxcl&apos;s Business Enablement Services has
                  emerged as a navigator for businesses, guiding them through the complexities
                  of establishment and expansion with a blend of precision and innovation.
                  We build the frameworks that support not only the businesses of today but
                  also shape the market leaders of tomorrow.
                </p>

                <p>
                  <span
                    className="font-bold text-[#c06f23] cursor-pointer"
                    onClick={toBusinessEnablement}
                  >
                    Learn More...
                  </span>
                </p>

                <br />

                <p className="text-justify text-black">
                  <span className="font-semibold text-black">
                    Corporate and Professional Upskilling:
                  </span>{" "}
                  enxcl&apos;s profound industry acumen empowers us to offer innovative,
                  insightful, and contextually relevant training solutions. We offer various
                  tailored and customized trainings for corporates to up-skill and cross-skill
                  professionals from entry level to senior leadership. Understanding the
                  critical importance of continual learning, our upskilling programs are
                  meticulously crafted to equip professionals and teams with advanced
                  competencies and industry-relevant expertise.
                </p>
                <p>
                  <span
                    className="font-bold text-[#c06f23] cursor-pointer"
                    onClick={toXpertEaze}
                  >
                    Learn More...
                  </span>
                </p>
              </div>
              <div className="bg-[#ffb451] p-8 rounded-xl flex w-full md:min-h-[100px] mt-3 md:mt-5 shadow-xl">

                <h3 className="text-justify italic text-[16px] break-words hyphens-auto">
                  By empowering startups, scale-ups and established enterprises
                  alike, enxcl cultivates a sustainable business ecosystem that is
                  meticulously designed for enduring growth and long-term success
                </h3>
                <div className="mt-[-50px] md:mt-[-70px] mr-[-15px]">
                  <img
                    src={QuotesImage}
                    alt=""
                    className="w-[250px] md:w-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our vision */}
        <div className="w-full">
          <div className="w-full bg-black mt-12" id="visions">
            <div className="w-full justify-evenly items-center flex flex-col gap-5 md:flex-row py-8 px-4">
              <div className="max-w-[500px] p-2 rounded-lg">
                <p className="text-[#ffbe47] text-[34px] mb-2 font-bold">Our Vision</p>

                <p className="text-white/90 font-semibold text-justify py-4 text-[24px] mb-3">
                  To be the premier consulting, technology, and upskilling partner, driving exceptional excellence and sustainable success for our customers
                </p>
              </div>
              <div className="w-[250px]">
                <img src={VisionImage} alt="Image" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-24 px-8" id="aboutenxcl">
          <div className="gap-10">
            <div className="w-full mt-10">
              <div className="">
                <h3 className="text-[24px] font-semibold pb-5 text-gray-600">
                  Why choose enxcl?
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="text-justify text-black">
                    enxcl Business Solutions stands out as a trusted partner for organizations seeking operational excellence, innovation, and cost-effectiveness. Our expertise in managing a diverse portfolio of products and large-scale programs across multiple domains and technologies, with globally distributed teams, positions us as a leader in delivering results that meet the demands of modern businesses.
                  </p>
                  <p className="text-justify text-black">
                    We offer highly competitive rates by leveraging the strategic advantages of our locations and the abundant availability of top-tier talent. Our extensive network of external consultants and partner organizations enhances our ability to scale and deliver on complex projects with precision and efficiency.
                  </p>
                  <p className="text-justify text-black">
                    enxcl also has proven experience in Build, Operate, and Transfer (BOT) models, encompassing best practices, development of key competencies, and the successful establishment of captive units and Offshore Development Centers (ODCs). This enables us to offer tailored solutions that align with the strategic objectives of our clients.
                  </p>
                  <p className="text-justify text-black">
                    In addition, we provide customized placement services that meet permanent and contract hiring requirements, from entry-level positions to senior leadership roles. Our bespoke training programs, designed and delivered by industry experts, equip professionals at all levels with the skills needed to excel in today’s dynamic business environment.
                  </p>
                  <p className="text-justify text-black">
                    These unique capabilities make enxcl a standout in the marketplace, offering end-to-end solutions that drive performance, growth, and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our quality */}
        <QualityPolicyTailwind />
        {/* Our Values */}
        <div className="md:px-24 py-8" id="values">
          <div className="bg-[#ffbf6b] pt-8 md:rounded-2xl grid md:grid-cols-3 shadow-xl px-10">
            <div className="w-[250px] mx-auto flex justify-center items-center">
              <Card className="bg-transparent border-0 shadow-none">
                <CardHeader className="w-[300px]">
                  <span className="text-[34px] font-bold">Our Values</span>
                  <CardDescription className="text-justify pt-4 text-black text-[18px]">
                    At enxcl, our corporate values underpin every aspect of our
                    work, steering our approach to business, client partnerships
                    and internal collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            {ourValuesData?.map((value) => (
              <div className="w-[350px]  mx-auto" key={value.id}>
                <Card className="h-[320px] mb-8 cursor-pointer border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-[100px] h-[100px] rounded-full border flex justify-center items-center hover:bg-blue-200 hover:scale-110 transition-transform delay-100 mb-2">
                        {value.icon}
                      </div>
                      <CardTitle className="pb-4">{value.header}</CardTitle>
                    </div>

                    <CardDescription className="text-justify text-black text-[16px]">
                      {value.content}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Our Leadership & Team */}
        <div className="bg-black px-4 md:px-24 py-2 md:py-8" id="leadership">
          <div className="flex justify-center"><span className="text-[46px] text-white font-semibold">enxcl&apos;s Leadership</span></div>
          <div className="flex flex-wrap ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 p-2">
                <Card
                  className="relative w-full h-[385px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                  <CardContent className="relative h-full p-0 px-3 pt-3">
                    <img
                      src={member?.image}
                      alt={member?.name}
                      className="w-full h-[300px] rounded-t-2xl object-cover"
                    />
                    <div className="px-4 mt-3">
                      <span className="text-md font-bold">{member?.name}</span>
                      <div className='flex items-center gap-3'>
                        <h4 className="text-xs text-black font-semibold">{member?.role}</h4>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button><RightArrowYellow /></button>
                          </DialogTrigger>
                          <DialogContent className="md:min-w-[900px] max-h-[700px] md:max-h-max overflow-auto">
                            <div className="w-full flex gap-5 md:flex-row flex-col-reverse">
                              <div className="md:w-3/5 w-full">
                                <DialogHeader>
                                  <div>
                                    <span className='text-[34px] font-semibold'>{member?.name}</span>
                                    <h4 className="text-[#c06f23] font-semibold mt-0 text-[20px] ">{member?.role}</h4>
                                  </div>
                                </DialogHeader>
                                <DialogDescription>
                                  <div className='flex gap-10 md:flex-row flex-col-reverse max-h-[400px] overflow-auto mt-4'>
                                    <div className='w-full'>
                                      <p className='text-black text-justify break-words text-[15px] leading-6'>
                                        {/* Split the additionalInfo text into paragraphs */}
                                        {/* {member?.name} */}
                                        {member?.additionalInfo.split('\n\n').map((paragraph, index) => (
                                          <p key={index}>{paragraph}</p>
                                        ))}
                                      </p>
                                    </div>

                                  </div>
                                </DialogDescription>
                              </div>
                              <div className='md:w-2/4 w-full flex justify-center items-center'>
                                <img
                                  src={member?.image}
                                  alt={member?.name}
                                  className="w-full h-[350px] rounded-t-2xl object-cover"
                                />
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Client Statistics */}
        <div className="md:flex justify-between py-8 md:px-24 md:py-8 md:w-full gap-20 px-8">
          <div className="md:max-w-[600px] py-4 md:w-3/4 w-full">
            <span className="text-[28px] font-semibold mb-2">
              Client Statistics
            </span>
            <p className="text-black text-justify break-words ">
              At enxcl,our guiding philosophy is both straightforward and
              profound: &quot;Customer First, Always&quot;.Therefore, we prioritize a
              tailored response to ensure that our services align precisely with
              their expectations.This customer-centric approach is instrumental
              in cultivating trust and nurturing enduring relationships. It is
              this deep commitment to our clients that drives us to consistently
              surpass expectations, ensuring that every interaction with enxcl
              is nothing short of exceptional.
            </p>
            <button className="w-auto h-[48px] rounded-3xl bg-[#aaaaaa] cursor-not-allowed flex justify-center items-center gap-[10px] font-semibold p-4 mt-5">
              <span>
                Case Studies
              </span>
              <RightArrow />
            </button>
          </div>
          <div className=" md:px-0 md:md:w-3/6 w-full">
            <div className=" w-full flex flex-col justify-center items-center  bg-black rounded-xl text-white p-8 gap-11">
              <div className="flex justify-between gap-10 w-full">
                <div className="flex flex-col">
                  <span className="text-[24px] font-bold">
                    90+
                  </span>
                  <span className="md:min-w-[200px]">Clients & Partners</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[24px] font-bold">
                    25,000+
                  </span>
                  <span className="md:min-w-[200px]">Consulting Hours</span>
                </div>
              </div>
              <div className="flex justify-between gap-10 w-full">
                <div className="flex flex-col w-[100px]">
                  <span className="text-[24px] font-bold">
                    10,000+
                  </span>
                  <span className="md:min-w-[200px]">Professionals Trained</span>
                </div>
                <div className="flex flex-col mr-3 md:mr-0">
                  <span className="text-[24px] font-bold">
                    100,000+
                  </span>
                  <span className="md:min-w-[200px]">Training Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="bg-[#FBF2E7] py-8 md:py-8 mb-8 overflow-hidden">
          <div className="logos-container">
            <div className="logos-content">
              {logos.concat(logos).map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-image"
                />
              ))}
            </div>
          </div>
        </div>


        {/* ------------ this div please move to service component  */}
        <div>

        </div>
      </section>
    </>
  );
};

export default About;