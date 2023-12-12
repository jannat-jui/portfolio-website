import { TypeAnimation } from "react-type-animation";
import SocialMediaButton from "./SocialMediaButton";

const Banner = () => {
    return (
        <div className="lg:min-h-[100vh] w-full text-center flex flex-col justify-center items-center pt-32 lg:pt-0">
            <p className="text-[#828282] text-xs lg:text-xl font-medium dm">LETS BUILD SOMETHING TOGETHER</p>

            <h1 className="text-4xl lg:text-[5rem] font-bold mt-10 text-white">Hi, I am Jannat Ara Haque  <span className="text-[#27AE60]">Jui</span></h1>

            <TypeAnimation
                sequence={[
                    'A Front-End Developer.',
                    1500,
                    'A Back-End Developer.',
                    1500,
                    'A MERN Stack Developer',
                    1500,
                    'A Full Stack Developer',
                    1500,
                ]}
                speed={50}
                className="dmsans mt-6 lg:mt-12 text-lg lg:text-[2.5rem]"
                repeat={Infinity}
            />

            <p className="mt-8 text-gray-400 dmsans text-xs md:text-base">I concentrate on developing back-end <br /> technology-integrated responsive front-end web applications.</p>

            <SocialMediaButton/>

        </div>
    );
};

export default Banner;