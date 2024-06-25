import Section from "../Section";
import SectionTitle from "../SectionTitle";

const Services = () => {
    return (
        <Section className="py-[5%]" id="services">
            <div className="relative h-full">
                <div className="absolute right-0 left-0 -top-[5vw] bottom-0 object-contain -z-10 h-[100%]">
                    <svg viewBox="0 0 1920 1563" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1969.5 159.953C1699.5 469.62 1031.1 996.053 517.5 624.453C-124.5 159.953 472 -56.4571 617.5 44.4994C797.708 169.538 808 518.953 463 788.453C118 1057.95 -42.5 1303.45 -42.5 1542.95" stroke="#FFCD11" strokeWidth="40" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="container">
                    <div className="space-y-[2.5vw] mt-[5vw]">
                        <SectionTitle text="OUR EXPERTISE"/>
                        <p className="text-[1.9vw] font-medium w-[35%]">
                            We grow amazing companies through exceptional branding and communications.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Services;