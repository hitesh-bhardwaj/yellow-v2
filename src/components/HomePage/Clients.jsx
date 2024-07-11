import Section from "../Section"
import BrandsMarquee from "./BrandsMarquee";
import SectionTitle from "../SectionTitle";
import Testimonial from "./Testimonial";

const Clients = () => {

    return (
        <Section className="py-[5%] dark" id="clients">
            <div className="bg-body pt-[5%] pb-[10%] text-white relative min-h-screen">
                <div className="container mb-[8vw]">
                    <div className="space-y-[1.5vw]">
                        <p data-para-anim className="text-[1.2vw] font-medium fadeIn">Clients</p>
                        <h4 data-para-anim className="text-[2.5vw] font-display leading-[1.35] w-1/2 ">Small or large, local or far, all of our clients are connected with our purpose of perfect execution.</h4>
                    </div>
                </div>
                <div className="mb-[18vw] w-screen overflow-hidden">
                    <BrandsMarquee />
                </div>
                <div className="w-screen overflow-hidden relative z-10">
                    <div className="w-full flex justify-center mb-[8vw]">
                        <SectionTitle text="Client Reviews"/>
                    </div>
                    <div>
                        <Testimonial />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Clients;

