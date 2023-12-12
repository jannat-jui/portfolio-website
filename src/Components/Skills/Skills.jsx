import SectionTitle from "../Shared/Section Title/SectionTitle";
import Marquee from "react-fast-marquee";
import javascript from "../../assets/skills/icon-javscript.svg"
import express from "../../assets/skills/icon-express.svg"
import git from "../../assets/skills/icon-git.svg"
import mongo from "../../assets/skills/icon-mongodb.svg"
import nextjs from "../../assets/skills/icon-nextjs.svg"
import nodejs from "../../assets/skills/icon-nodejs.svg"
import react from "../../assets/skills/icon-react.svg"
import tailwind from "../../assets/skills/icon-tailwindcss.svg"
import MarqueeSkills from "./MarqueeSkills";

const Skills = () => {
    return (
        <div className="mt-32 md:mx-[10%]">
            <SectionTitle title={'Skills'} semititle={'The skills, tools and technologies I am really good at:'} />

            <div className="mt-20">

                <Marquee pauseOnHover className="flex justify-between items-center">
                    <MarqueeSkills image={javascript} title={'Javascript'}/>
                    <MarqueeSkills image={react} title={'React'}/>
                    <MarqueeSkills image={nextjs} title={'Next.Js'}/>
                    <MarqueeSkills image={nodejs} title={'Node.Js'}/>
                    <MarqueeSkills image={express} title={'Express.Js'}/>
                    <MarqueeSkills image={mongo} title={'MongoDB'}/>
                    <MarqueeSkills image={tailwind} title={'Tailwind CSS'}/>
                    <MarqueeSkills image={git} title={'git'}/>


                    <MarqueeSkills image={javascript} title={'Javascript'}/>
                    <MarqueeSkills image={react} title={'React'}/>
                    <MarqueeSkills image={nextjs} title={'Next.Js'}/>
                    <MarqueeSkills image={nodejs} title={'Node.Js'}/>
                    <MarqueeSkills image={express} title={'Express.Js'}/>
                    <MarqueeSkills image={mongo} title={'MongoDB'}/>
                    <MarqueeSkills image={tailwind} title={'Tailwind CSS'}/>
                    <MarqueeSkills image={git} title={'git'}/>
                </Marquee>



            </div>

        </div>
    );
};

export default Skills;