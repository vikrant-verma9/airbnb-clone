import React from "react";
import Logo from "../images/airbnb-virtual1.png"
import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero">
        <img src={Logo} className="hero--photo"/>
            <h1 className="hero--header">
                Online Experiences
            </h1>
            <p className="hero--text">
                Join unique activities led by
                one-of-a-kind hosts-all without leaving home  .
            </p>
            </section>
    )
}