"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Organize your weekly -schedules and programs easily!
                </h1>

                <p className="hero__subtitle">
                    Create your weekly schedule online and reward yourself for what you can do
                </p>

                <CustomButton 
                    title= "Explore ready Programs"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    <div className="hero__image-overlay" />
                </div>
            </div>
        </div>
    )
}

export default Hero