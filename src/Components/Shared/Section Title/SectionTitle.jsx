

const SectionTitle = ({title, semititle}) => {
    return (
        <div className="text-center w-fit mx-auto">
            <h1 className="text-center mx-auto bg-[#374151] w-fit rounded-lg text-[#D1D5DB] dmsans px-[1.25rem]">{title}</h1>

            <p className="text-xl text-[#D1D5DB] mt-4 text-center">{semititle}</p>
            
        </div>
    );
};

export default SectionTitle;