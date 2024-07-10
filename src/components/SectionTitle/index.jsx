const SectionTitle = ({text, className=""}) => {
    return (
        <h2 data-title-anim className={`text-[5.7vw] w-fit font-display leading-[1.1] uppercase ${className}`}>{text}</h2>
    )
}

export default SectionTitle;