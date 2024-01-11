import Image from "next/image";

function Header() {

  return (
   <div className="header-container">
    <div className="blog-info-container">
      <Image alt="image" src={"opensource-icon.svg"} width="48" height={48} className="header-logo"/>
      <span className="OSC-header-text">جامعه متن باز قم</span>
    </div>
    <div className="header-links-container">
      {/* Change this SPAN to <a> tag later or don't both can work */}
        <span className="header-links">صفحه اصلی</span>
        <span className="header-links">وبلاگ</span>
        <span className="header-links">رویدادها</span>
        <span className="header-links">امتیازات</span>
        <span className="header-links">درباره ما</span>
      </div>
   </div>
  );
}

export default Header;
