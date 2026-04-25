import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import Experience from "../icons/Experience";
import Bot from "../icons/Bot";
import Placement from "../icons/Placement";
import Training from "../icons/Training";
import Pricing from "../icons/Pricing";
import Network from "../icons/Network";
import ExperienceWhite from "../icons/ExperienceWhite";
import TrainingBlack from "../icons/TrainnigBlack";
import PricingBlack from "../icons/PricingBlack";
import NetworkBlack from "../icons/NetworkBlack";
import BotBlack from "../icons/Bot2";
import PlacementBlack from "../icons/PlacementBlack";

const SolutionCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <ExperienceWhite />,
      icon2: <Experience />,
      title: 'Global Program Mastery',
      description: 'Managed several products and large programs with globally distributed teams in multiple domains and technologies',
    },
    {
      id: 2,
      icon: <Bot />,
      icon2: <BotBlack />,
      title: 'Business Empowerment',
      description: 'Experience in Build, Operate and Transfer(BOT)-practices, competencies, captive units and ODCs',
    },
    {
      id: 3,
      icon: <Pricing />,
      icon2: <PricingBlack />,
      title: 'Competitive Pricing',
      description: 'Highly competitive rates leveraging the location advantages and high availability of talent',
    },
    {
      id: 4,
      icon: <Training />,
      icon2: <TrainingBlack />,
      title: 'Expert-Led Tailored Training',
      description: 'Customized trainings from entry level to senior leadership, desgined and delivered by industry experts',
    },
   
    {
      id:5 ,
      icon: <Placement />,
      icon2: <PlacementBlack />,
      title: 'Customized Talent Solutions',
      description: 'Tailored placement services to meet the permanent and contract hiring requirements, from entry-level to leadership',
    },
    {
      id: 6,
      icon: <Network />,
      icon2: <NetworkBlack />,
      title: 'Comprehensive Partner Ecosystem',
      description: 'Strong network of external consultants and partner organizations',
    },
  ];
  return (
    <div className="md:px-24 py-8 px-8 bg-[#F4F4F4]">
    <div className="flex flex-col gap-8">
      <div>
        <span className="md:text-[44px] text-[25px] font-bold">
          Why enxcl stands out ?
        </span>
      </div>
      <div className="flex flex-wrap  justify-center gap-8">
        {cardData.map((card) => (
          <Card
            className="md:w-[330px] md:h-auto md:min-h-[260px] h-auto rounded-2xl bg-white hover:bg-[#b8680d] hover:text-white cursor-auto group"
            key={card.id}
          >
            <CardHeader>
              <div className="w-[60px] h-[60px] bg-[#b8680d] flex justify-center items-center rounded-full group-hover:bg-[#F4F4F4]">
                {/* Show icon2 on hover */}
                <div className="group-hover:hidden">{card.icon}</div>
                <div className="hidden group-hover:block">{card.icon2}</div>
              </div>
            </CardHeader>
            <CardContent className="flex gap-5 flex-col">
              <div className="font-bold text-[20px]">{card.title}</div>
              <div className="text-[16px] font-normal text-wrap">
                {card.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SolutionCards