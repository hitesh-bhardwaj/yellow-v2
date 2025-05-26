import { titleAnim } from "@/components/gsapAnimations";
import SectionTitle from "@/components/SectionTitle";

export default function Testting() {

    titleAnim();

    return (
        <>  
            <div className="h-screen w-screen" />
            <div className="w-screen h-screen flex items-center justify-center">
                <SectionTitle text={"Our Work"} />
            </div>
            <div className="h-screen w-screen" />
        </>
    )
}