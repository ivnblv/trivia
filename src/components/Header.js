import React from "react";
import Score from "./Score";
import { A } from "hookrouter";

const Header = () => {
  return (
    <div className="header">
      <A href="/">Trivia</A>
      <Score />
    </div>
  );
};
export default Header;
