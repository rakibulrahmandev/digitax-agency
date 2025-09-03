import SectionTitle from "../../Title/SectionTitle";

export default function ReasonSection() {
    return (
        <>
            <section className="w-full max-w-[1920px] min-h-screen pt-20 laptop:pt-[120px] desktop:pt-[150px]">
                <div className="container">
                    <div className="w-full flex items-center justify-center">
                        <SectionTitle headingText='Reasons to Choose DigitX for Your Digital Journey' paragraphText='Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.' />
                    </div>
                </div>
            </section>
        </>
    );
};