

const MarqueeSkills = ({image, title}) => {
    return (
        <div className="flex flex-col ml-12 cursor-pointer justify-center w-fit gap-1 items-center">
            <img src={image} alt="" />
            <h1 className="text-[#D1D5DB] text-lg">{title}</h1>
        </div>
    );
};

export default MarqueeSkills;