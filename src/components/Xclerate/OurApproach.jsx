import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Assess from "../icons/Assess";
import Stratagy from "../icons/Stratagy";
import TransForm from "../icons/TransForm";
import Optimize from "../icons/Optimize";
import eASTO from '@/assets/easto.webp'
const OurApproach = () => {
    return (
        <>
            <div>
                <span className="text-[38px] font-bold">Our Approach</span>
                <h2 className="text-[24px] font-semibold pt-2">Transforming vision into reality through e-A S T O</h2>
                <p className="pt-5 text-justify text-black"> At the heart of our consulting practice lies the proprietary e-ASTO framework, a dynamic model that strategically integrates the principles of Lean, Agile, Six Sigma, and Change Management principles to deliver comprehensive and sustainable solutions. The<span className="text-[#BA690C] font-bold"> e-ASTO </span>framework is structured around four core pillars:<span className="text-[#BA690C] font-bold"> Assess, Strategize, Transform</span> and <span className="text-[#BA690C] font-bold">Optimize</span>, elevating your business through superior delivery, service management, and process optimization.</p>
            </div>
            <div className="flex justify-between gap-3 md:gap-0 pt-8 md:flex-row flex-col">
                <Card
                    className="md:w-[400px] md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="flex items-center gap-5">
                            <div className="w-[70px] h-[70px] bg-[#F4F4F4] flex justify-center items-center rounded-full ">
                                {/* Show icon2 on hover */}
                                <div className="group-hover:block"><Assess /></div>

                            </div>
                            <div className="text-[#BA690C] font-semibold text-lg">ASSESS</div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[16px] font-normal text-black text-justify">
                        <span className="font-semibold">Assessing the Current State:</span> involves assessing an organization’s existing operations, processes, and systems to identify strengths, weaknesses, and inefficiencies. This evaluation provides a clear baseline, guiding informed decisions for improvements and aligning future strategies with business objectives.
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className="md:w-[400px] mt-3 md:mt-0 md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="flex items-center gap-5">
                            <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                                {/* Show icon2 on hover */}
                                <div className=" group-hover:block"><Stratagy /></div>
                            </div>
                            <div className="text-[#BA690C] font-semibold text-lg">STRATERGIZE</div>
                        </div>

                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[16px] font-normal text-justify text-black">
                        <span className="font-semibold">Design for the Future State:</span> involves envisioning an optimal model for an organization’s operations, processes, and systems, aligning them with strategic goals. It focuses on innovation, efficiency, and growth by defining the right processes, resources, workflows, and technologies needed to achieve long-term success and adaptability.
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-between gap-3 md:gap-0 pt-8 md:flex-row flex-col">

                <Card
                    className="md:w-[400px] mt-3 md:mt-0 md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="flex items-center gap-5">
                            <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                                {/* Show icon2 on hover */}
                                <div className=" group-hover:block"><Optimize /></div>
                            </div>
                            <div className="text-[#BA690C] font-semibold text-lg">OPTIMIZE</div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">

                        <div className="text-[16px] font-normal text-justify text-black">
                        <span className="font-semibold">Continuously Drive Excellence:</span> the commitment to ongoing improvement in performance, operations, and outcomes. It fosters a culture of innovation, quality, and efficiency by setting high standards, refining processes, and upskilling teams. This approach ensures consistent delivery of superior results, exceeding customer expectations and driving long-term success.
                        </div>
                    </CardContent>
                </Card>
                <div className="h-[400px] w-[350px] mt-[-190px] md:block hidden">
                    <img src={eASTO} alt="" />
                </div>
                <Card
                    className="md:w-[400px] mt-3 md:mt-0 md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="flex items-center gap-5">
                            <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                                {/* Show icon2 on hover */}
                                <div className=" group-hover:block"><TransForm /></div>
                            </div>
                            <div className="text-[#BA690C] font-semibold text-lg">TRANSFORM</div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">

                        <div className="text-[16px] font-normal text-justify text-black">
                        <span className="font-semibold">Evolve the Business and Way of Working:</span> transforming an organization&apos;s operations, culture, and processes by adopting new technologies, refining business models, enhancing employee skills, and embracing more agile, collaborative, and customer-centric approaches.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default OurApproach;