import InitialHeader from '@/components/initialheader/InitialHeader'
import Business from '@/assets/xclerate.webp'
import GrowthnExcellence from '@/components/Xclerate/GrowthnExcellence';
import Xclerate from '@/components/Xclerate/Xclerate';
import OurApproach from '@/components/Xclerate/OurApproach';
import Broucher from '@/components/icons/Broucher';
import WhyConsulting from '@/components/Xclerate/WhyConsulting';

const XclerateService = () => {
  const title = "Xclerate";
  const mainTitle = "Business and Management Consulting";
  return (
    <>
      <div className="pt-24 py-8 md:px-24 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
        <Xclerate />
        <OurApproach />
      </div>
      <WhyConsulting />
      <div className=" py-8 md:px-24 px-8">

        {/* Services we provide */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <span className="text-[38px] font-bold">
            Services we provide
          </span>
          <button className="w-[220px] font-semibold p-5 h-[50px]  justify-center items-center bg-[#aaaaaa] cursor-not-allowed rounded-3xl gap-2 md:flex hidden">Download Brochure<Broucher /></button>
        </div>
        <GrowthnExcellence />
      </div>
    </>
  )
}

export default XclerateService