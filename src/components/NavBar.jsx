const NavBar = () => {
  return (
    <div className="xl:flex pt-16 items-center 2xl:mx-60 xl:mx-20 mx-5 justify-between">
      <img
        className="cursor-pointer w-2/4 md:w-auto"
        src="/assets_motion_art/MotionArtEffect-logo.png"
        alt="logo image"
      />
      <div className="opacity-0 xl:opacity-100 ">
        <button className="bg-white rounded-md font-medium font-outfit hover:bg-transparent border hover:text-white text-lg py-4 px-9 transition duration-500 ease-in-out pointer-events-auto">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
