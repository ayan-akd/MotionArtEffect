const Footer = () => {
  return (
    <div className="footer-gradient">
      <div
        className="text-[#EEE5FFBD] flex items-center justify-between 2xl:mx-60 xl:mx-20 mx-5 h-14 text-sm font-outfit
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
