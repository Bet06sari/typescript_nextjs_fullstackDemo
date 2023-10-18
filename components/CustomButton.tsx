"use client";
import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton = ( {title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            Start
        </span>
    </button>
  )
}

export default CustomButton