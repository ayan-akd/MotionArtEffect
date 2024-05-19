const CardSection = () => {
    return (
        <div className="mb-20">
            <h2 className="text-center text-[#EEE5FF] font-sora font-medium xl:leading-[60px] leading-[55px] xl:text-[40px] md:text-3xl text-2xl 2xl:w-[36%] md:w-6/12 mx-auto md:px-0 px-10">Apply On Any Section Or Enable For Whole Page</h2>
            <div className="flex flex-col md:flex-row xl:justify-center 2xl:px-0 xl:px-20 lg:px-8 px-5 justify-between gap-6 mt-16">
                <div className="card-background 2xl:w-4/12 p-10 h-5/6">
                    <h3 className="font-sora xl:text-2xl text-xl text-[#EEE5FF] font-medium md:leading-[45px] leading-10 ">Apply On Section</h3>
                    <p className="font-outfit text-[#EEE5FFBD] font-light lg:my-5 my-3">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
                    <img className="mx-auto" src="/assets_motion_art/motionarteffect-img11.png" alt="" />
                </div>
                <div className="card-background 2xl:w-4/12 p-10 md:mt-20 ">
                    <h3 className="font-sora xl:text-2xl text-xl text-[#EEE5FF] font-medium md:leading-[45px] leading-10 ">Apply On Page</h3>
                    <p className="font-outfit text-[#EEE5FFBD] font-light lg:my-5 my-3">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img className="mx-auto" src="/assets_motion_art/motionarteffect-img10.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CardSection;