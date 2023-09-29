import logo from "./images/netflix-Logo.svg";
import React, { Component } from "react";
import HeaderCss from "./header.module.css";
import tv_img from "./images/tv.png";
import download_img from "./images/download.png";
import kids_img from "./images/kids.png";
import Content from "./content";

function Header() {
  return (
    <>
      <div className={HeaderCss.container1}>
        <nav>
          <img className={HeaderCss.nav_logo} src={logo} alt="Netflix Logo" />
          <button className={HeaderCss.btn1}>Sign In</button>
        </nav>
        <p className={HeaderCss.main_heading}>
          Unlimited movies, TV shows, and more
        </p>
        <p className={HeaderCss.sub_heading}>Watch anywhere. Cancel anytime.</p>
        <p className={HeaderCss.sub_heading}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input className={HeaderCss.mail} placeholder="Email address"></input>
        <button className={HeaderCss.btn2}>Get Started &gt; </button>
      </div>

      <Content
        imageSrc={tv_img}
        string1="Enjoy on your TV
"
        string2="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      ></Content>

      <Content
        imageSrc={download_img}
        string1="Download your shows to watch offline
"
        string2="Save your favorites easily and always have something to watch."
      ></Content>

      <Content
        string1="Watch everywhere
"
        string2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      ></Content>

      <Content
        imageSrc={kids_img}
        string1="Create profiles for kids
"
        string2="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.s"
      ></Content>
    </>
  );
}

export default Header;
