import quality from "@/assets/qp.webp"

const QualityPolicyTailwind = () => {
  return (
    // Outer container: dark background, full width, responsive padding
   <div className="w-full bg-black mt-12" id="visions">
          <div className="w-full justify-evenly items-center flex flex-col gap-5 md:flex-row py-8 px-4">
            <div className="max-w-[500px] p-2 rounded-lg">
              <p className="text-[#ffbe47] text-[34px] mb-2 font-bold">Quality Policy</p>

              <p className="text-white/90 font-semibold text-justify py-4 text-[24px] mb-3">
              We are committed to exceeding customer expectations by upholding quality and legal standards, embracing global best practices, continuously improving our processes, and cultivating a culture of excellence that fosters lasting, trust-based relationships.
              </p>
            </div>
            <div className="w-[250px]">
              <img src={quality} alt="Image" className="rounded-xl" />
            </div>
          </div>
        </div>
  );
};

export default QualityPolicyTailwind;