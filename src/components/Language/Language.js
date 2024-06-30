import React, { useState } from "react";
import { RiFlagLine } from "react-icons/ri";
import "./Language.css";

const LanguageSwitcher = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleSwitchToEnglish = () => {
    setIsEnglish(true);
    // Thực hiện logic chuyển đổi ngôn ngữ tiếng Anh ở đây
  };

  const handleSwitchToVietnamese = () => {
    setIsEnglish(false);
    // Thực hiện logic chuyển đổi ngôn ngữ tiếng Việt ở đây
  };

  return (
    <div className="language-switcher">
      <a href=""><img src="https://demo037058.web30s.vn/assets/images/language/vn.svg"></img></a>

      
      <a href=""><img src="https://demo037058.web30s.vn/assets/images/language/us.svg"></img></a>
     
    </div>
  );
};

export default LanguageSwitcher;
