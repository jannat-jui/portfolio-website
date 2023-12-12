import SectionTitle from "../Shared/Section Title/SectionTitle";
import mypic from "../../assets/jui.jpg"
import "./DownloadButton.css"
import { saveAs } from 'file-saver';

const AboutMe = () => {
    const handleDownload = () => {
        const pdfFilePath = '../../../public/Jui Web Developer Resume.pdf';
        saveAs(pdfFilePath, 'jui-resume.pdf');
    };
    return (
        <div id="about" className="mx-[8%] mt-20 lg:mt-0">
            <SectionTitle title={'About me'} />

            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center mt-20">


                <div className=" md:w-[70vw] lg:w-[50vw]">
                    <h1 className="text-[2rem] font-bold text-[#F9FAFB]">Curious about me? Here you have it:</h1>
                    <p className="text-base leading-[1.5rem] text-justify mt-7 text-[#D1D5DB]">
                        I am a dedicated MERN Stack Developer on a mission to shape the digital landscape with cutting-edge technologies. With a flair for innovation and a deep-rooted love for modern web development, I specialize in leveraging JavaScript, React.js, Node.js, Express.js, MongoDB, and other headless technologies to engineer intuitive and scalable web applications. With extensive experience in API development, I am adept at designing and implementing efficient solutions for complex projects. I am always seeking new opportunities to connect with the broader developer community and continue to grow and learn. <br /> <br />

                        I have extensive experience organizing events on topics related to programming and student development. I have dedicated myself to creating spaces that foster learning, collaboration, and community building. I have honed my skills in seamlessly bringing together developers and students from diverse backgrounds.
                    </p>

                    <div onClick={handleDownload} className="button ">
                        My Resume
                        <span>
                            <span></span>
                        </span>
                    </div>
                </div>

                <div data-aos="zoom-in-up" data-aos-duration="2000" className="relative hover:bg-[#27AE60] hover:shadow-xl hover:shadow-red-700">
                    <div className="w-[20rem] md:w-[25rem] opacity-50 h-[25rem] md:h-[30rem] bg-[#374151] hover:bg-[#27AE60]">

                    </div>

                    <div className="w-[20rem] md:w-[25rem] h-[25rem] md:h-[30rem] absolute -top-10 left-10">
                        <img className="w-[20rem] md:w-[25rem] h-[25rem] md:h-[30rem]" src={mypic} alt="" />

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;