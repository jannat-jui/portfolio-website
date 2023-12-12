
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


const SocialMediaButton = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jannathaquejui@gmail.com';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+8801998585346';
  };

  return (
    <div className='mt-12 flex justify-center items-center gap-5'>

    <a href="https://www.linkedin.com/in/jannat-jui/" target="_blank" rel="noreferrer">
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaLinkedin className='text-xl text-white'/>
    </div>
    </a>
    <a href="https://github.com/jannat-jui" target="_blank" rel="noreferrer">
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaGithub className='text-xl text-white'/>
    </div>
    </a>


    
    <div onClick={handleEmailClick} className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <MdEmail className='text-xl text-white'/>
    </div>
    <div onClick={handleCallClick} className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <RiContactsFill className='text-xl text-white'/>
    </div>

    </div>
  );
};

export default SocialMediaButton;
