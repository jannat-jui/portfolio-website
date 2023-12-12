import { useState } from "react";
import { Button, Link } from "react-scroll";
import { saveAs } from 'file-saver';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleDownload = () => {
        const pdfFilePath = '../../../public/Jui Web Developer Resume.pdf';
        saveAs(pdfFilePath, 'jui-resume.pdf');
      };
    return (
        <div className="z-50">
            <div className="navbar text-white bg-gray-950 px-[8%] fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={()=>setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open? '' : 'hidden'}`}>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="about" smooth={true} duration={1000}>About</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="skills" smooth={true} duration={1000}>Skills</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="projects" smooth={true} duration={1000}>Projects</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="contact" smooth={true} duration={1000}>Contact</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white text-lg md:text-xl lg:text-[2.25rem] font-bold nova">J<span className="text-[#27AE60]">J</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-5 menu-horizontal px-1">
                        {/* <li><a className="text-lg hover:text-[#27AE60]" href="">About</a></li> */}
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="about" smooth={true} duration={1000}>About</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="education" smooth={true} duration={1000}>Education</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="skills" smooth={true} duration={1000}>Skills</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="projects" smooth={true} duration={1000}>Projects</Link></li>
                        <li> <Link className="text-lg hover:text-[#27AE60] cursor-pointer"  to="contact" smooth={true} duration={1000}>Contact</Link></li>
                      

                    </ul>
                </div>
                <div className="navbar-end">

                    <Button onClick={handleDownload} className="btn text-white btn-outline nova hover:bg-green-700 hover:text-white ">Download Resume</Button>
                   
                </div>
            </div>

        </div>
    );
};

export default Navbar;