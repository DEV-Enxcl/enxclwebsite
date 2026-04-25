import InitialHeader from "@/components/initialheader/InitialHeader";
import Business from '@/assets/business.webp'
import Introduction from "@/components/XpertEaze/Introduction";
import TrainHireDeploy from "@/components/XpertEaze/TrainHireDeploy";
import IndustrySkilling from "@/components/XpertEaze/industrySkilling";
import xpertizePMI from '@/assets/xpertisePMI.webp'

const XpertiseServices = () => {
    const title = "XpertEaze";
    const mainTitle = "Corporate and Professional Upskilling";
    return (
        <>
            <div className="pt-24 py-8 md:px-24 px-8">
                <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
                <Introduction />
                <TrainHireDeploy />
                <IndustrySkilling />
                {/* ------------ this div please move to service component  */}
            </div>
            <section>
                <div className="bg-[#161717] w-full md:flex md:justify-between mt-8 px-4 md:px-28 py-8 gap-12">
                    <div className="md:w-2/4 text-white">
                        <span className="text-[38px] font-semibold mb-8">
                            Premier Authorized Training Partner of PMI
                        </span>
                        <div className="max-w-[550px] text-justify">
                            <p>
                                As a distinguished Premier Authorized Training Partner of PMI,
                                XpertEaze offers world-class Project Management and Agile
                                training led by industry veterans, along with specialized
                                leadership and management programs tailored to resonate with
                                your organization&apos;s unique aspirations.
                            </p>
                            <br />
                            <p>
                                Our comprehensive suite of training programs includes
                                Portfolio/ Program/ Project Management, Disciplined Agile,
                                SAFe, and Scrum methodologies, Business Analysis, Product
                                Management and customized activity-oriented training sessions
                                tailored to meet your specific needs.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/4 w-full flex flex-col justify-center items-center  rounded-xl text-white p-8 gap-11 mt-4 md:mt-0">
                        <img src={xpertizePMI} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default XpertiseServices