import SocialMediaButton from "../Banner/SocialMediaButton";
import SectionTitle from "../Shared/Section Title/SectionTitle";
import email from "../../assets/email.svg"
import call from "../../assets/call.svg"

const Footer = () => {
    return (
        <div className="mt-20 pb-32">
        <SectionTitle title={'Contact With me'} />
        
        <p className="text-[#D1D5DB] text-center md:text-xl">
        What’s next? Feel free to reach out to me if you are looking for <br /> a developer, have a query, or simply want to connect.
        </p>

        <div className="flex justify-center items-center gap-5 mt-12 ">
            <img src={email} alt="" />
            <p className="text-[#F9FAFB] md:text-[2rem] font-semibold">jannathaquejui@gmail.com</p>
        </div>


        <div className="flex justify-center items-center gap-5 mt-5 ">
            <img src={call} alt="" />
            <p className="text-[#F9FAFB] md:text-[2rem] font-semibold">+8801998585346</p>
        </div>

        <div className="mt-12">
            <p className="text-[#D1D5DB] text-center">You may also find me on these platforms!</p>
            <SocialMediaButton/>
        </div>
    </div>
    );
};

export default Footer;