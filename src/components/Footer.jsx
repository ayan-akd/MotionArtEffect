const Footer = () => {
  return (
    <div className="footer-gradient">
      <div
        className="text-[#EEE5FFBD] flex items-center justify-between 2xl:flex-row flex-col-reverse 2xl:mx-60 xl:mx-20 mx-5 2xl:py-0 py-6 gap-4 2xl:h-14 h-24 text-sm font-outfit
      "
      >
        <div>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className="flex gap-10 pointer-events-auto">
          <p className="cursor-pointer">Documentation</p>
          <p className="cursor-pointer">Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
