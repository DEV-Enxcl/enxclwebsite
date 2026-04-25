import Contact from '@/assets/contact.webp'
import Weare from '@/assets/weare.webp'
import locationIcon from '@/assets/loc.webp'
import CallIcon from '@/components/icons/CallIcon';
import Email from '@/components/icons/Email';
import Location from '@/components/icons/Location';
import SendMessage from '@/components/icons/SendMessage';
import InitialHeader from '@/components/initialheader/InitialHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] = useState('Thiruvananthapuram');
  const title = "";
  const mainTitle = "Contact Us";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the specific field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    let valid = true;
    let newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!name) {
      newErrors.name = 'Name is required!';
      valid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required!';
      valid = false;
    }
    if (!phone) {
      newErrors.phone = 'Phone is required!';
      valid = false;
    }
    if (!message) {
      newErrors.message = 'Message is required!';
      valid = false;
    }

    setErrors(newErrors); // Set error messages
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // If validation fails, do not proceed

    setIsLoading(true); // Start loading when form is submitted

    const serviceId = 'service_twj779p';
    const templateId = 'template_scnautp';
    const userId = 'NdmFQCGpsT3UgURga';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        if (response?.status === 200) {
          toast.success('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '', // Reset message field here
          });
        }
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        return error;
      })
      .finally(() => {
        setIsLoading(false); // Stop loading when response comes
      });
  };

  const getCurrentDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };
  const locationData = {
    Thiruvananthapuram: {
      phone: '+91 7306 396 219',
      email: 'info@enxcl.com',
      address: `First Floor, Asiatic Business Center, Technopark Phase III Main Road,
                Kazhakkoottam, Thiruvananthapuram, Kerala, India - 695585`,
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.011020098624!2d76.87749631433412!3d8.55002589387696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfa5b1bc205f%3A0x53d5525935778a4!2sAsiatic%20Business%20Center%2C%20Technopark%20Phase%20III%20Main%20Rd%2C%20Kulathoor%2C%20Kazhakkoottam%2C%20Thiruvananthapuram%2C%20Kerala%20695585%2C%20India!5e0!3m2!1sen!2sus!4v1691843753246!5m2!1sen!2sus',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Haripad: {
      phone: '+91 7736 986 662',
      email: 'info@enxcl.com',
      address: '2nd Floor, Rethnama Tower, NH66, Haripad, Alappuzha, Kerala, India - 690514',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.0957956799416!2d76.4550397!3d9.2808981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061fc63260cb21%3A0x5cbbac1c77d923c7!2s2nd%20Floor%2C%20Retnamma%20Towers%2C%20Haripad%2C%20Kerala%20690514!5e0!3m2!1sen!2sin!4v1691843753246!5m2!1sen!2sus',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Kochi: {
      phone: '+91 7736 985 556',
      email: 'info@enxcl.com',
      address: 'Carnival Infopark, Phase 1 Ground Floor, Infopark, Kakkanad, Kochi, Kerala, India - 682042',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.258070578243!2d76.36284436952663!3d10.014192120053778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8208e5c4d7%3A0x932c51aef8e61a5b!2sCarnival%20Infopark%20Phase%20I%2C%20Infopark%20Campus%2C%20Infopark%2C%20Kochi%2C%20Kakkanad%2C%20Kerala%20682030!5e0!3m2!1sen!2sin!4v1727252762785!5m2!1sen!2sin',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Kayamkulam: {
      phone: '+91 8714 602 083',
      email: 'info@enxcl.com',
      address: 'Kummampallil Sabari, House no:36/1050, Puthiyidom, Kayamkulam, Alappuzha, Kerala, India - 690502',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126022.99376498554!2d76.3965275890625!3d9.224739320526552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061d28db53556b%3A0xf8cc8d6300379f96!2sSIP%20Abacus%20Kayamkulam!5e0!3m2!1sen!2sin!4v1727253006251!5m2!1sen!2sin',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Neyyatinkara: {
      phone: '+91 7736 891 110',
      email: 'info@enxcl.com',
      address: 'Damodaram, Moonnukallinmoodu, Neyyattinkara, Kerala, India - 695123',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.7309738136635!2d77.07461820000003!3d8.4091356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05af8ab5f825d9%3A0xf58a493fd5745be8!2sSIP%20Abacus%20Neyyattinkara!5e0!3m2!1sen!2sin!4v1727253088950!5m2!1sen!2sin',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Malaysia: {
      phone: '+60 12 525 4158',
      email: 'info@enxcl.com',
      address: 'Malaysia',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32611139.562062323!2d87.6873424165248!3d3.8419315820082005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sin!4v1727253166917!5m2!1sen!2sin',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    },
    Dubai: {
      phone: '+971 50 426 8283',
      email: 'info@enxcl.com',
      address: 'Dubai, United Arab Emirates',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925124.8749208492!2d54.56937354387155!3d25.075815970155926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1727253241476!5m2!1sen!2sin',
      timing: (() => {
        const currentDay = getCurrentDay();
        const timings = [
          { day: 'Monday', time: '9 am–6 pm' },
          { day: 'Tuesday', time: '9 am–6 pm' },
          { day: 'Wednesday', time: '9 am–6 pm' },
          { day: 'Thursday', time: '9 am–6 pm' },
          { day: 'Friday', time: '9 am–6 pm' },
          { day: 'Saturday', time: 'Closed' },
          { day: 'Sunday', time: 'Closed' }
        ];

        return (
          <ul className="list-none p-0">
            {timings.map((item) => (
              <li
                key={item.day}
                className={`flex justify-between py-1 ${item.day === currentDay ? 'font-bold' : 'font-semibold'}`}
              >
                <span className="flex-1 ml-6">{item.day}</span>
                <span className="w-24 text-right mr-6">{item.time}</span>
              </li>
            ))}
          </ul>
        );
      })()
    }
  }


  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };


  return (
    <>
      <div className="pt-24 py-16 md:px-24 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Contact} />
        <div className='flex justify-between pt-12 flex-wrap md:flex-nowrap'>
          <div className='flex flex-col bg-[#ffbe47] rounded-2xl md:w-2/4 w-full'>
            <span className='text-[38px] font-bold p-8'>
              <span className='text-[#292929]'></span> We would like to hear<br />
              <span className='text-black'>from you!</span>
            </span>
            <div className='flex justify-end'>
              <img src={Weare} alt="" />
            </div>
          </div>
          <div className='flex flex-col rounded-2xl md:mt-0 mt-5'>
            <span className='text-[38px] font-bold'>
              Send us a Message
            </span>
            <form className="bg-[#FBF2E7] p-8 rounded-xl flex gap-8 flex-col mt-5" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="font-semibold">Name</label>
                <Input name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="flex gap-3">
                <div>
                  <label htmlFor="email" className="font-semibold">Email</label>
                  <Input name="email" value={formData.email} onChange={handleInputChange} type="email" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="font-semibold">Phone</label>
                  <Input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-semibold">Message</label>
                <Textarea name="message" value={formData.message} onChange={handleInputChange} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                className="w-[180px] h-[40px] rounded-3xl bg-[#ffbe47] flex items-center justify-center gap-3 font-semibold hover:font-bold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-between">
                    <div className="spinner w-[20px] h-[20px] border-4 border-black border-t-red-500 rounded-full animate-spin mx-auto my-24"></div>
                    <span className='ml-1'>Sending...</span>
                  </div>
                ) : (
                  <>
                    Send Message
                    <SendMessage />
                  </>
                )}
              </button>
            </form>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center py-12'>

          <span className='text-[38px] font-bold flex justify-center'>
            Our Offices
          </span>
        </div>
        <div>
          <div className='flex md:gap-5 gap-8 justify-center md:flex-row flex-col'>
            <div className="flex justify-center flex-wrap md:flex-nowrap md:h-[100px] h-auto border-x-2 border-t-2 border-gray-600 items-center px-5 rounded-xl w-auto">
              <div className='flex flex-col w-full gap-3'>
                <div className='flex justify-center gap-3 md:mt-0 mt-2'>
                  <span className='text-[18px] font-semibold '>India</span>
                  <img src={locationIcon} alt="" className='w-[15px] h-[25px]' />
                </div>
                <div className='flex gap-5 flex-wrap'>
                  {Object.keys(locationData)
                    .filter((location) => location !== 'Malaysia' && location !== 'Dubai') // Filter out Malaysia and Dubai
                    .map((location) => (
                      <button
                        key={location}
                        onClick={() => handleLocationClick(location)}
                        className={`w-auto h-[40px] p-5 focus:outline-1 border border-[#BA690C] rounded-2xl flex justify-center items-center 
          ${selectedLocation === location ? 'bg-[#BA690C] text-white font-semibold' : 'hover:bg-[#BA690C] hover:text-white hover:font-semibold'}`}
                      >
                        {location}
                      </button>
                    ))}
                </div>
              </div>


            </div>
            <div className="flex justify-center flex-wrap md:flex-nowrap h-[100px] border-x-2 border-t-2 border-gray-600 items-center px-5 rounded-xl w-auto">
              <div className='flex flex-col w-full gap-3'>
                <div className='flex justify-center gap-3'>
                  <span className='text-[18px] font-semibold'>Other Locations</span>
                  <img src={locationIcon} alt="" className='w-[15px] h-[25px]' />
                </div>
                <div className='flex gap-5'>
                  {Object.keys(locationData)
                    .filter((location) => location === 'Malaysia' || location === 'Dubai') // Show only Malaysia and Dubai
                    .map((location) => (
                      <button
                        key={location}
                        onClick={() => handleLocationClick(location)}
                        className={`w-auto h-[40px] p-5 focus:outline-1 border border-[#BA690C] rounded-2xl flex justify-center items-center 
        ${selectedLocation === location ? 'bg-[#BA690C] text-white font-semibold' : 'hover:bg-[#BA690C] hover:text-white hover:font-semibold'}`}
                      >
                        {location}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>


          {/* Conditionally render the card based on selected location */}
          {selectedLocation && (
            <div className="flex items-center justify-center p-8 shadow-2xl rounded-xl mt-12 md:flex-row flex-col gap-6 md:gap-0">
              <div className="flex flex-col md:w-1/5 w-full gap-5 pt-6">
                <div className="flex items-center gap-5 ">
                  <div>
                    <CallIcon />
                  </div>
                  <div className="flex flex-col">
                    {/* <span className="text-[#727272]"></span> */}
                    <span className="font-bold">{locationData[selectedLocation].phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <Email />
                  </div>
                  <div className="flex flex-col">
                    {/* <span className="text-[#727272]">E-mail:</span> */}
                    <span className="font-bold">{locationData[selectedLocation].email}</span>
                  </div>
                </div>

              </div>
              {locationData[selectedLocation].address == "Malaysia" || locationData[selectedLocation].address == "Dubai, United Arab Emirates" ?
                <></> :
                <div className="flex flex-col md:w-2/5 w-full gap-5">
                  <div className="flex items-center gap-5 flex-col pr-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-5 ">
                        <div>
                          <Location />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#727272]">Address:</span>
                          <span className="font-bold">{locationData[selectedLocation].address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              }
              <div className="flex flex-col md:w-2/6 gap-5 w-full">
                <iframe
                  title="Google Maps Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={locationData[selectedLocation].googleMapsSrc}
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactUs