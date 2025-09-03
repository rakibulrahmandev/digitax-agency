export default function SectionTitle({headingText, paragraphText, spanText}) {
    return (
        <>
            <div className="w-full text-center flex items-center justify-center flex-col gap-[10px] laptop:gap-3.5 desktop:gap-5">
                <div className="w-full max-w-[358px] laptop:max-w-[650px] desktop:max-w-[800px]">
                    <div className="w-full">
                        <h1 className="text-absolute-white text-[28px] font-semibold leading-[150%] laptop:text-[38px] desktop:text-[48px]">{headingText} <span className="text-grey-shade-40">{spanText}</span></h1>
                    </div>
                </div>
                <div className="w-full max-w-[358px] laptop:max-w-[1040px] desktop:max-w-[1156px]">
                    <div className="w-full">
                        <p className="text-white-shade-50 text-sm font-normal leading-[150%] laptop:text-base desktop:text-lg">{paragraphText}</p>
                    </div>
                </div>
            </div>
        </>
    );
};