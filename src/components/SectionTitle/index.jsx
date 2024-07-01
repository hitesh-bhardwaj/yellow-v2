const SectionTitle = ({text, className=""}) => {
    return (
        <h2 className={`text-[5.7vw] w-fit font-display leading-[1.1] uppercase heading-anim ${className}`}>{text}</h2>
    )
}

export default SectionTitle;