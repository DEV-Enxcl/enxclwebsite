import Logo from '@/assets/enxcl-logo.webp'
import FacebookIcon from "../icons/Facebook/FacebookIcon";
import InstagramIcon from "../icons/Instagram/InstagramIcon";
import LinkedinIcon from "../icons/Linkedin/LinkedinIcon";
import CallIcon from '../icons/CallIcon';
import Email from '../icons/Email';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import SendMessage from '../icons/SendMessage';
import { useState } from 'react';
import { Input } from '../ui/input';

const Footer = () => {
  const navigate = useNavigate();
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
  const toContact = () => {
    navigateTo('/contact-us');
  };
  const toXcelerate = () => {
    navigateTo('/xclerate');
  };
  const toAbout = () => {
    navigateTo('/about');
  };
  const toXpertEaze = () => {
    navigateTo('/xperteaze');
  };
  const blogs = () => {
    navigateTo('/blogs');
  };
  const events = () => {
    navigateTo('/events');
  };

  return (
    <>
      <div className="w-full bg-black py-6 px-10 md:px-24 font-sans">
        <div className="md:flex justify-between border-b border-white/50">
          <div className="w-full md:w-[350px] md:mb-0 flex flex-col justify-center">
            <img src={Logo} alt="" className="w-[183px] h-[80px]" />
            {/* <span className='text-white mt-[-26px] ml-[46px] text-[13px] font-semibold'>enhancing excellence</span> */}
            {/* <p className="text-white text-[14px]">
              Cultivating sustainable business ecosystems that is meticulously designed for enhancing growth and long term success.
            </p> */}
          </div>
          <div className="flex gap-4 md:gap-8 mb-4 md:pt-2 pt-5 justify-start md:justify-center w-full pr-4">
            <div className="text-white mb-2">
              <h2 className="font-semibold text-nowrap mb-2 text-[16px]">Quick Links</h2>
              <div className='flex gap-3 flex-col md:hidden'>
                <div className='flex gap-3 md:flex-row flex-col'>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toAbout}>About Us</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toAbout}>Services</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toXcelerate}>Xclerate</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toBusinessEnablement}>BizExS</p>
                </div>
                <div className='flex gap-3 md:flex-row flex-col'>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toITExS}>ITExS</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toXpertEaze}>XpertEaze</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toContact}>Contact</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={blogs}>Blogs</p>
                  <p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={events}>Events</p>
                </div>
              </div>
              <table className='hidden md:block'>
                <tr>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toAbout}>About Us</p></td>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toXcelerate}>Xclerate</p></td>
                </tr>
                <tr>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toAbout}>Services</p></td>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toBusinessEnablement}>BizExS</p></td>

                </tr>
                <tr>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toContact}>Contact</p></td>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toITExS}>ITExS</p></td>

                </tr>
                <tr>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:cursor-not-allowed' >Resources</p></td>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={toXpertEaze}>XpertEaze</p></td>

                </tr>
                <tr>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={blogs}>Blogs</p></td>
                  <td className='w-[80px]'><p className='text-[#e4e4e4] text-[14px] cursor-pointer hover:text-[#ffbe47]' onClick={events}>Events</p></td>

                </tr>
              </table>
            </div>
          </div>
          <div className="text-white pt-1 pb-2 md:pb-0">
            <h2 className="font-semibold text-[16px]">Connect with us</h2>
            <form>
              <div className="bg-white p-[6px] rounded-full mt-2 flex justify-between items-center h-[40px]">
                <input
                  type="text"
                  name='message'
                  placeholder="Enter your message"
                  className="outline-none text-black bg-transparent pl-1 text-[14px]"
                  onChange={handleInputChange}
                  value={formData.message}
                  required
                />

                <Dialog>
                  <DialogTrigger asChild>
                    {formData?.message ?
                      <button className="bg-[#0C0C0CE5] rounded-[20px] px-2 py-1 text-sm ml-4 md:m-0 h-[30px] w-[100px] p-[6px] text-[14px] cursor-pointer" type='button' >Send inquiry</button> :
                      <button className="bg-[#6b6b6be5] rounded-[20px] px-2 py-1 text-sm ml-4 md:m-0 h-[30px] w-[100px] p-[6px] text-[14px] cursor-not-allowed" disabled >Send inquiry</button>
                    }

                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div>
                      <label htmlFor="name" className="font-semibold">Name</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} required />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="flex gap-3">
                      <div>
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <Input name="email" value={formData.email} onChange={handleInputChange} required type="email" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="font-semibold">Phone</label>
                        <Input name="phone" value={formData.phone} onChange={handleInputChange} required type="tel" />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                      </div>
                    </div>

                    <DialogFooter>
                      <button
                        className="w-[180px] h-[40px] rounded-3xl bg-[#ffbe47] flex items-center justify-center gap-3 font-semibold hover:font-bold"
                        type="button"
                        disabled={isLoading}
                        onClick={sendEmail}
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
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </form>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </div>
        <div className="text-white justify-center md:flex md:justify-between items-center pt-4 mb-4">

          <div className='flex flex-col gap-3 w-full md:w-3/4'>
            <h3 className="text-[16px] font-semibold mb-1">Contact Us</h3>
            <p className="text-[14px] flex items-center gap-2 text-[#e4e4e4]"><CallIcon />+91 7306 396 219</p>
            <p className="text-[14px] flex items-center gap-2 text-[#e4e4e4]"><Email />info@enxcl.com</p>

          </div>
          <div className='w-full md:pl-10'>
            <h3 className="text-[16px] font-semibold mb-1 md:pt-2 pt-4">Address</h3>
            <p className="text-[14px] text-[#e4e4e4]"> First Floor, Asiatic Business Center, Technopark Phase III Main Rd,<br className='hidden md:block' />Kulathoor, Kazhakkoottam, Thiruvananthapuram, Kerala, India - 695585</p>
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1 pt-5 md:pt-0">Follow us on</h3>
            <div className="flex gap-5 mt-2 justify-start md:justify-normal">

              <a href="https://www.facebook.com/enxcl?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <div className="w-[40px] h-[40px] rounded-full border flex justify-center items-center bg-white p-1">
                  <FacebookIcon />
                </div>
              </a>
              <a href="https://www.instagram.com/enxcl_business?igsh=MWFndmxya25qbmI2eA==" target="_blank" rel="noopener noreferrer">
                <div className="w-[40px] h-[40px] rounded-full border flex justify-center items-center bg-white p-1">
                  <InstagramIcon />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/enxcl-business-solutions/" target="_blank" rel="noopener noreferrer">
                <div className="w-[40px] h-[40px] rounded-full border flex justify-center items-center bg-white p-1">
                  <LinkedinIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
        <span className='text-gray-500 text-[12px] w-full flex md:justify-start justify-center'>© 2024 enxcl Business Solutions. All Rights Reserved.</span>
      </div>
    </>
  );
};

export default Footer;
