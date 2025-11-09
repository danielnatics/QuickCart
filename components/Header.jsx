"use client";
import Link from "next/link";

const logoStyle = {
  fontWeight: "bold",
  fontSize: "22px",
  letterSpacing: "2.5px",
};

const Header = ({ router }) => {
  return (
    <h1
      style={logoStyle}
      onClick={() => router.push("/")}
      className="cursor-pointer w-28 md:w-32 "
    >
      <span className="text-orange-600" style={{}}>
        Hez
      </span>
      Tech
    </h1>
  );
};

export default Header;
