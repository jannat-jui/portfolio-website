import SectionTitle from "../Shared/Section Title/SectionTitle";
import { useForm, ValidationError } from '@formspree/react';
import tick from "../../assets/tick.png"

const Contact = () => {
    const [state, handleSubmit] = useForm("xqkvrwnj");
    if (state.succeeded) {
        return <div className="my-32 px-4">
            <img className="w-[8rem] mx-auto" src={tick} alt="" />
            <p className="text-xl text-center font-medium">Thank you for your message! I will get back to you soon.</p>

        </div>;
    }
    return (
        <div className="mt-20 pb-10 lg:mx-[10%]">
            <SectionTitle title={'Get in Touch'} />

            <form className="mt-20 mx-auto text-center" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <input className="w-full md:w-[22rem] pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder="Your name" type="text" name="Name" id="" />

                    <input className="w-full md:w-[22rem] pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder=" Your email" type="email" name="email" id="" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                </div>

                <input className="w-full md:w-[46rem] mt-8 pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder="Type subject" type="text" name="subject" required id="" />
                <br />

                <textarea className="lg:w-[46rem] mt-8 pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400" id="w3review" required name="message" cols="50" placeholder="Message">

                </textarea>

                <div className="text-center">
                    <input className="w-[9rem] h-[2.6.25rem] btn btn-neutral bg-[#27AE60] text-white text-lg mt-5" type="submit" disabled={state.submitting} value="Submit" />
                </div>

            </form>

        </div>
    );
};

export default Contact;