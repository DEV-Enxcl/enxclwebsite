import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import NewsnInsights1 from '@/assets/NewsAndInsights-1.webp';
import NewsnInsights2 from '@/assets/NewsAndInsights-2.webp';
import NewsnInsights4 from '@/assets/NewsAndInsights-4.webp';
import NewsnInsights5 from '@/assets/NewsAndInsights-5.webp';
import NewsnInsights6 from '@/assets/NewsAndInsights-6.webp';
import NewsnInsights3 from '@/assets/news3.webp';
import NewsnInsights7 from '@/assets/NewsAndInsights-7.webp';
import NewsnInsights8 from '@/assets/NewsAndInsights-8.webp';
import NewsnInsights9 from '@/assets/NewsAndInsights-9.webp';
import NewsnInsights10 from '@/assets/NewsAndInsights-10.webp';
import NewsnInsights11 from '@/assets/NewsAndInsights-11.webp';
import NewsnInsights12 from '@/assets/NewsAndInsights-12.webp';
import NewsnInsights13 from '@/assets/NewsAndInsights-13.webp';


import { Dialog } from '@radix-ui/react-dialog';
import { DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

const Events = () => {
  const newsItems = [
    {
      image: NewsnInsights6,
      description: (<div className='flex flex-col gap-2'>

        <p>
          Headquartered in Hong Kong, Crown Worldwide Group provides logistics, records management, private and corporate relocation services, workspace management and fine art transportation in over 45 countries.
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          Headquartered in Hong Kong, Crown Worldwide Group provides logistics, records management, private and corporate relocation services, workspace management and fine art transportation in over 45 countries. Crown has released DART 2.0, a software solution to track and manage retail asset files for its BFSI clients.
        </p>
        <p>
          The launch of DART 2.0 was led by Srinivas Krishnan, Regional Managing Director – South Asia, at an event held at the Kazhakootam office of Crown&apos;s software development partner, enxcl Business Solutions. Attendees included Crown&apos;s Vice President & Group IT Head Chris Davis-Pipe and Praveen Joseph, Assistant Vice President of Crown Records Management, South Asia, who participated online. Antony Anand, Crown Digital Service Asia Head, and enxcl’s leadership—
          Santhosh Udayanan, Managing Director, Arun Sreekumar, Chief Delivery Officer, Jayashankar Menon, Chief Operating Officer, and Nainar Pandaram, Crown Digital Service India Manager—were also present.
        </p>
        <p>
          Srinivas Krishnan highlighted how DART 2.0 will streamline Crown&apos;s BFSI operations, enhancing both efficiency and quality. He and Chris Davis commended the enxcl team for delivering the project with exceptional quality and within the planned timeline.
        </p>
      </div>),
      heading: 'The Launch of DART 2.0'

    },
    {
      image: NewsnInsights13,
      description: (<div className='flex flex-col gap-2'>

        <p>
         Enlight, by enxcl in collaboration with Mahaguru Institute of Technology, is an industry skilling program designed to make B.Tech students industry-ready from day one...
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
         
         Enlight, by enxcl in collaboration with Mahaguru Institute of Technology, is an industry skilling program designed to make B.Tech students industry-ready from day one. This continuous four-year program offers hands-on projects, problem-solving exercises, and mentorship from leading industry experts, giving students early exposure to the skills companies demand. More than a program, it’s a mindset shift — your journey to industry readiness starts now.
        </p>
      </div>),
      heading: "Enlight: Empowering B.Tech Students with Industry-Ready Skills"

    },
    {
      image: NewsnInsights12,
      description: (<div className='flex flex-col gap-2'>

        <p>
          enxcl inaugurated the new batch at Mahaguru Institute of Technology with an engaging Orientation Program. Led by our Founder & MD, Mr. Santhosh Udayanan,...
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          enxcl inaugurated the new batch at Mahaguru Institute of Technology with an engaging Orientation Program. Led by our Founder & MD, Mr. Santhosh Udayanan, the session inspired first-year students with insights on vision, values, and the future of technology, reaffirming our commitment to nurturing talent and strengthening industry–academia collaboration.
        </p>
      </div>),
      heading: "Bridging Academia and Industry: enxcl Orientation at Mahaguru Institute of Technology "

    },
    {
      image: NewsnInsights11,
      description: (<div className='flex flex-col gap-2'>

        <p>
          enxcl had the privilege of hosting Third-Semester Computer Science  (AI & ML) students from Ponjesly College of Engineering for an industrial visit...
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          enxcl had the privilege of hosting Third-Semester Compute Science  (AI & ML) students from Ponjesly College of Engineering for an industrial visit. The program provided students with valuable exposure to real-world applications, encouraging active participation and bridging the gap between academic learning and industry practices
        </p>
      </div>),
      heading: "enxcl Facilitates Industry Exposure for Ponjesly College Engineering Students"

    },
    {
      image: NewsnInsights10,
      description: (<div className='flex flex-col gap-2'>

        <p>
          We are excited to share that enxcl is now a proud member of GTech (Group of Technology Companies), the leading industry body representing IT and ITeS companies in Kerala....
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          We are excited to share that enxcl is now a proud member of <b>GTech (Group of Technology Companies)</b>, the leading industry body representing IT and ITeS companies in Kerala. Headquartered in Trivandrum, GTech serves as a vital platform for tech enterprises to collaborate, drive innovation, shape policy, and promote sustainable growth within the state’s vibrant technology ecosystem.

        </p>
        <p>
          This milestone marks a significant step in enxcl’s growth journey, enhancing our ability to engage with key stakeholders across industry, government, and academia—while contributing to Kerala’s emergence as a global IT hub.

        </p>
      </div>),
      heading: "Together with GTech for a Better Tommorow"

    },
    {
      image: NewsnInsights9,
      description: (<div className='flex flex-col gap-2'>

        <p>
          We are excited to introduce XpertLeap — a collaboration between enxcl <b>XpertEaze</b> and <b>Future Leap</b>, focused on empowering individuals with skills, mentorship, and career opportunities.
          With a focus on:
          Industry-relevant training...
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          We are excited to introduce XpertLeap — a collaboration between enxcl <b>XpertEaze</b> and <b>Future Leap</b>, focused on empowering individuals with skills, mentorship, and career opportunities.

        </p>
        <p>
          With a focus on:
          <ul>
            <li>➼ Industry-relevant training</li>
            <li>➼ Hands-on job experiences</li>
            <li>➼ Expert mentorship & coaching</li>
            <li>➼ Placement support & corporate ties</li>
            <li>➼ Startup & innovation ecosystem access</li>
          </ul>
        </p>
        <p>
          Leaders from <b>Kerala Startup Mission</b>, <b>TIIM</b>, and <b>ICFOSS</b>, along with the visionary founders of <b>enxcl</b> and <b>Future Leap</b>, came together to kickstart this transformative initiative.

          Let’s leap into excellence — together:  <a href="https://www.xpertleap.com" target="_blank" rel="noopener noreferrer" className='text-blue-600'>
            xpertleap.com
          </a>

        </p>
      </div>),
      heading: 'XpertLeap Has Officially Launched!'

    },
    {
      image: NewsnInsights8,
      description: (<div className='flex flex-col gap-2'>

        <p>
          We are Proud to Join Hand with Farmlogics!
          enxcl and Farmlogics are joining forces for an innovative Hire-Train-Deploy program! We&apos;re dedicated to discovering and nurturing entry-level talent, providing them with top-notch training at enxcl...
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          We are Proud to Join Hand with Farmlogics!
          enxcl and Farmlogics are joining forces for an innovative Hire-Train-Deploy program! We&apos;re dedicated to discovering and nurturing entry-level talent, providing them with top-notch training at enxcl before they embark on exciting career paths at Farmlogics.
        </p>
        <p>


          At enxcl, we are committed to driving excellence through tailored learning solutions. Onward to greater success!!!
        </p>
      </div>),
      heading: 'Hire - Train - Deploy Program'

    },
    {
      image: NewsnInsights7,
      description: (<div className='flex flex-col gap-2'>

        <p>
          Proud moment at enxcl as our founder delivers yet another outstanding Project Management Excellence session...!

          Excited to have enxcl deliver a powerful Project Management Skill Enhancement session for Nissan Digital India! This training equipped..
        </p>


      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          Proud moment at enxcl as our founder delivers yet another outstanding Project Management Excellence session...!

          Excited to have enxcl deliver a powerful Project Management Skill Enhancement session for Nissan Digital India! This training equipped  participants with essential skills to improve efficiency, execution, and leadership in projects.
        </p>
        <p>


          At enxcl, we are committed to driving excellence through tailored learning solutions. Onward to greater success!!!
        </p>
      </div>),
      heading: 'Personalized Project Management Excellence Program'

    },
    {
      image: NewsnInsights5,
      description: (<div className='flex flex-col gap-2'>

        <p>
          Proud to share another instance of enxcl’s unwavering commitment to driving excellence for our clients.
        </p>

        <p>
          Our customized Project Management Skill Enhancement program for the incredible team at Beagle Security was..
        </p>
      </div>),

      description2: (<div className='flex flex-col gap-2'>

        <p>
          Proud to share another instance of enxcl’s unwavering commitment to driving excellence for our clients.
        </p>

        <p>
          Our customized Project Management Skill Enhancement program for the incredible team at Beagle Security was dynamic and insightful, equipping participants with essential project management knowledge and skills.
        </p>
      </div>),
      heading: 'Personalized Project Management Excellence Program'

    },

    {
      image: NewsnInsights1,
      description: (
        <div className='flex flex-col gap-2'>
          <p>
            We are delighted to announce the opening of our new office in Infopark, Kochi. This milestone represents a significant step in our growth and a renewed commitment to better serving our clients and partners.
          </p>


        </div>
      ),
      description2: (
        <div className='flex flex-col gap-2'>
          <p>
            We are delighted to announce the opening of our new office in Infopark, Kochi. This milestone represents a significant step in our growth and a renewed commitment to better serving our clients and partners.
          </p>
          <p>
            The inauguration event, held at Carnival Infopark, Phase 1 on Wednesday, September 4th, 2024, was well attended by our clients and Business leaders alike. Our state-of-the-art facility in Kochi will support our Business Enablement Services and foster innovation in one of the region&apos;s
            most vibrant business hubs.
          </p>

        </div>
      ),
      heading: (
        <>
          Opening of enxcl&apos;s New Office at Infopark, Kochi
        </>

      )
    },
    {
      image: NewsnInsights4,
      description: (
        <>
          <p>
            Binu Lekshmy J R, Executive Director enxcl Business Solutions shared insights on ‘Containerisation and Micro-services Testing’ during the &quot;Software Testing Conference: Global Testers Summit 2024&quot; held at Travancore Hall,
          </p>
        </>
      ),
      description2: (
        <>
          <p>
            Binu Lekshmy J R, Executive Director enxcl Business Solutions shared insights on ‘Containerisation and Micro-services Testing’ during the &quot;Software Testing Conference: Global Testers Summit 2024&quot; held at Travancore Hall, Technopark on May 22nd, 2024, attended by over 110 employees from 35 different companies. Her expertise illuminated complexities and provided guidance on agile and efficient testing methodologies.
          </p>
        </>
      ),
      heading: 'Keynote Address at QA Forum'
    },
    {
      image: NewsnInsights3,
      description: (
        <>
          <p>
            Privileged to have led an impactful session today at Travancore Hall, Technopark, Trivandrum, in partnership with the Prathidhwani Technical Forum. The &quot;Master Class on Project Management&quot;, expertly delivered by Santhosh Udayanan,..
          </p>
        </>
      ),
      description2: (
        <div className='flex flex-col gap-2'>
          <p>
            Privileged to have led an impactful session today at Travancore Hall, Technopark, Trivandrum, in partnership with the Prathidhwani Technical Forum. The &quot;Master Class on Project Management&quot;, expertly delivered by Santhosh Udayanan, Managing Director of enxcl Business Solutions, attracted over 125 enthusiastic IT professionals.
          </p>
          <p>
            The session delved into cutting-edge project management methodologies, sparking vibrant discussions and engaging Q&A sessions. Attendees left with actionable insights and a deeper understanding of how to elevate their project management practices.
          </p>
        </div>
      ),
      heading: 'Project Management Master Class for IT Professionals'
    },

    {
      image: NewsnInsights2,
      description: (
        <>
          <p>
            Santhosh Udayanan, Founder and Managing Director, enxcl Business Solutions, has been awarded the prestigious Asia Leadership Award 2024 - &apos;The Versatile Leader of the Year.&apos; The event took place at the Pullman...
          </p>
        </>
      ),
      description2: (<>
        <p>
          Santhosh Udayanan, Founder and Managing Director, enxcl Business Solutions, has been awarded the prestigious Asia Leadership Award 2024 - &apos;The Versatile Leader of the Year.&apos; The event took place at the Pullman G Hotel Bangkok, Thailand, on July 26, 2024.

        </p>
        <p>
          His remarkable expertise in leading five diverse verticals of enxcl, embodying the spirit of resilience, innovation and transformative influence within these different verticals won him the award.
        </p>
      </>),
      heading: 'Asia Leadership Awards - Versatile Leader of 2024'
    }

  ];


  return (
    <div className="md:px-24 px-8 py-8 flex flex-col gap-8">
      <div className="pt-10">
        <span className="text-[44px] font-bold">New Events</span>
      </div>

      {/* Display all news items in a grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {newsItems.map((news, index) => (
          <Card key={index} className="w-full rounded-2xl hover:bg-[#ffb451] cursor-pointer">
            <CardHeader className="p-0">
              <img
                src={news.image}
                alt=" "
                className="rounded-t-2xl"
                style={{ width: '100%', height: 'auto' }}
              />
            </CardHeader>
            <CardContent>
              <div className="grid w-full">
                <p className="font-normal p-2 mt-2 text-justify break-words text-black">
                  {news.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className='text-black font-semibold flex justify-start pl-2'>Read More...</button>
                  </DialogTrigger>
                  <DialogContent className="md:min-w-[900px]">
                    <DialogHeader>
                      <DialogDescription>
                        <div className='flex gap-10 md:flex-row flex-col-reverse max-h-[400px] overflow-auto'>
                          <div className='w-full'>
                            <div>
                              <span className='text-[20px] font-semibold text-black'>{news?.heading}</span>
                            </div>
                            <p className='text-black text-justify break-words hyphens-auto mt-3'>
                              {news.description2}
                            </p>
                          </div>
                          <div className='w-full flex justify-center items-center'>
                            <img
                              src={news.image}
                              alt=" "
                              className="rounded-t-2xl"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
