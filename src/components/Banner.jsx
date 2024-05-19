const Banner = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 xl:mt-24 mt-12  2xl:mx-64 xl:mx-20 mx-5">
      <div className="md:text-start text-center">
        <p className="font-sora text-lg font-medium lg:pr-28">
          <span className="gradient-text">Transform</span> <br />
          <span className="gradient-text">Your Website</span>
        </p>
        <p className="font-outfit text-lg text-[#EEE5FF] font-light md:w-40 mt-3">
          With Motion Art Effect
        </p>
      </div>
      <div className="md:col-span-2 md:text-start text-center md:mt-0 mt-5 pointer-events-none mix-blend-difference">
        <h1 className="font-sora font-medium xl:text-[63px] md:text-[39px] text-[35px] xl:leading-[85px] md:leading-[60px] leading-[55px] text-[#EEE5FF]">
          Attract Your Visitors Attention With Colorful{" "}
          <span className="gradient-text">Motion Art Effect</span>
        </h1>
        <p className="font-outfit text-lg mt-6 font-light text-[#EEE5FFBD] xl:pr-8">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
