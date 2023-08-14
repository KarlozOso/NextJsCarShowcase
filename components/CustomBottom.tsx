"use client";
import Image from "next/image";
import { CustomButtomProps } from "@/types";

const CustomBottom = ({ title, containerStyles, handleClick }) : CustomButtomProps => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
       {title}
      </span>
    </button>
  )
}

export default CustomBottom