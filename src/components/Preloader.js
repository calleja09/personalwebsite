import React, { useEffect } from "react";
import './preloader.css';
import '../assets/animations/index'
import { preLoaderAnim } from "../assets/animations/index";

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    })

    return (
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span className="preload-font text-4xl">A</span>
                    <span className="preload-font text-6xl text-indigo-400">T</span>
                    <span className="preload-font text-4xl">C</span>
                </div>
            </div>
        </>
    )
}

export default Preloader