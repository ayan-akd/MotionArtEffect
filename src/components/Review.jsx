const Review = () => {
  return (
    <div className="text-[#EEE5FF] py-20">
      <p className="text-center font-outfit text-2xl">
        Trusted by thousands of users around the world
      </p>
      {/* review section  */}
      <div className="flex flex-wrap justify-around gap-10 mt-20 xl:px-10 lg:px-24">
        {/* review 1  */}
        <div className="flex gap-2">
          <img src="/assets_motion_art/motionarteffect-img2.png" alt="" />
          <div className="flex flex-col justify-center gap-3">
            <img src="/assets_motion_art/motionarteffect-img4.png" alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>
        {/* review 2  */}
        <div className="flex gap-2">
          <img src="/assets_motion_art/motionarteffect-img1.png" alt="" />
          <div className="flex flex-col justify-center gap-3">
            <img src="/assets_motion_art/motionarteffect-img4.png" alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>
        {/* review 3  */}
        <div className="flex gap-2">
          <img src="/assets_motion_art/motionarteffect-img3.png" alt="" />
          <div className="flex flex-col justify-center gap-3">
            <img src="/assets_motion_art/motionarteffect-img4.png" alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
