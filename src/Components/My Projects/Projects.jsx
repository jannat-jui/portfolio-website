import SectionTitle from "../Shared/Section Title/SectionTitle";
import "./MyProject.css"
import ProjectSkillGain from "./ProjectSkillGain";
import goto from "../../assets/goto.svg"
import skillsup from "../../assets/skillsup.png"
import share2savor from "../../assets/share2savor.png"
import tech from "../../assets/tech.png"


const Projects = () => {

    return (
        <div className="md:mx-[10%] mt-32">
            <SectionTitle title={'Work'} semititle={'Some of the noteworthy projects I have built:'} />

            <div className="mt-20 space-y-12">

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={skillsup} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-4 md:px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Lets Your Skill Up - Student and Class Management System</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ● Implemented a visually appealing home page with dynamic sections, captivating potential users instantly. <br />
                                ● Integrated Stripe for seamless and secure course enrollment and payment transactions. <br />
                                ● Developed distinct dashboards for students, teachers, and admins, each tailored to their specific needs <br />
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'Nodejs'} />
                                <ProjectSkillGain skillname={'Expressjs'} />
                                <ProjectSkillGain skillname={'MongoDb'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://letsyourskillup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#27AE60] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>



                {/* second project  */}

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row-reverse justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tr-2xl lg:rounded-br-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={share2savor} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tl-2xl lg:rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-4 md:px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Share2Savor - Food Donation Website</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ● Architected a responsive React frontend, ensuring an intuitive interface for donors and recipients, driving engagement and
                                accessibility. <br />
                                ● Leveraged the power of MongoDB, Express.js, React, and Node.js to create a comprehensive food donation platform,
                                ensuring a seamless full-stack experience for users. <br />
                                ● Implemented a robust authentication system using Firebase and JWT

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'Nodejs'} />
                                <ProjectSkillGain skillname={'Expressjs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://share2savor.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#27AE60] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/share2savor-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/share2savor-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* third project  */}

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={tech} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-4 md:px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Tech Guru E-commerce Website</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ● Implemented an intuitive and visually appealing user interface, allowing customers to effortlessly explore different technology categories, view detailed product information, and seamlessly add products to their shopping carts. <br />
                                ● Integrated Firebase for robust user authentication, enabling features like user sign-up, login, and personalized experiences.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'Nodejs'} />
                                <ProjectSkillGain skillname={'Expressjs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://brandshop-client-side-16c8e.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#27AE60] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/tech-guru-brandshop-client" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/tech-guru-brandshop-server" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Projects;