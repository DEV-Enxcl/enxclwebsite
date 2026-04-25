// eslint-disable-next-line react/prop-types
const InitialHeader = ({title, mainTitle, Business}) => {
    return (
        <>
            <div className="bg-black text-white md:h-[200px] h-auto rounded-2xl">
                <div className="flex h-auto justify-between">
                    <div className='p-8'>
                        {title &&
                            <span className="text-[#ff9736] md:text-[44px] text-[30px] rounded-md flex justify-start items-center font-bold">{title}</span>
                        }
                        <span className="md:text-[44px] text-[30px] font-bold flex md:flex-nowrap flex-wrap">{mainTitle}</span>
                    </div>
                    <div className='h-[200px] md:block hidden'>
                        <img src={Business} alt="" className='h-[200px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitialHeader