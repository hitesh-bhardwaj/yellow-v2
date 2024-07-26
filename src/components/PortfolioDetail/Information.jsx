import Section from "../Section"

const Information = ({info, title, categories}) => {
    return (
        <Section id="second-section">
            <div className="container py-[8%] mobile:pt-[15%] tablet:w-full">
                <div className="flex items-start justify-between gap-x-[2vw] gap-y-[4vw] mobile:flex mobile:flex-col mobile:gap-y-[7vw]">
                    <div className="w-1/2">
                        <h2 data-title-anim className="text-[4.8vw] mb-[3vw] leading-[1.1] font-display w-[60%] mobile:w-full normal-case mobile:order-1 mobile:mb-[7vw]">{info.subheading}</h2>
                        <div className="text-[1.2vw] font-medium flex flex-wrap gap-[0.5vw] w-[70%] mobile:order-4 mobile:text-[4vw] mobile:w-full mobile:gap-[2vw] tablet:text-[2vw] tablet:gap-[0.8vw]">
                            {categories && categories.map((category) => (
                                <p key={category.slug} className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">{category.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 col-start-2 pt-[1vw] mobile:pt-[5vw]">
                        <div 
                            className="mb-[4vw] text-[1.4vw] mobile:text-[4.5vw] tablet:text-[2.2vw] leading-[1.4] mobile:mb-[10vw]"
                            
                            dangerouslySetInnerHTML={{
                            __html: info.description,
                            }}
                        />
                        <div className="flex gap-[5vw] text-[1.4vw] font-medium tablet:text-[2vw]">
                            <div>
                                <p data-para-anim className="text-[1vw] mb-[0.5vw] mobile:text-[5vw] tablet:text-[2vw]">Client</p>
                                <p data-para-anim className="mobile:text-[5vw]" >{title}</p>
                            </div>
                            <div>
                                <p data-para-anim className="text-[1vw] mb-[0.5vw] mobile:text-[5vw] tablet:text-[2vw]">Industry</p>
                                <p data-para-anim className="mobile:text-[5vw]">{info.industry}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Information