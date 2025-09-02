export default function HeroButton({text}) {
    return (
        <>
            <button className="py-3.5 px-5 rounded-full bg-absolute-white border border-absolute-white outline-none text-grey-shade-10 text-sm font-normal leading-[150%] cursor-pointer desktop:text-lg desktop:py-[18px] desktop:px-6" >{text}</button>
            <button className="py-3.5 px-5 rounded-full bg-grey-shade-10 border border-grey-shade-15 outline-none text-absolute-white text-sm font-normal leading-[150%] cursor-pointer desktop:text-lg desktop:py-[18px] desktop:px-6" >{text}</button>
        </>
    );
};