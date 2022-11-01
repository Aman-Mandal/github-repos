import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Repos.module.css";
import img from "../../assets/pic.jpg";
import { MdLocationPin } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import Repository from "../../components/Repository/Repository";

const DUMMY_DATA = [
  {
    id: "r1",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r2",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r3",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r4",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r5",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r6",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r7",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r8",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
];

const Repos = () => {
  return (
    <section className={classes.section}>
      <Navbar />
      <div className={classes.card}>
        <div className={classes.profile}>
          <img src={img} alt="Profile pic" />
          <h4>Aman Mandal</h4>
          <p>Frontend Developer</p>
          <div className={classes.content}>
            <div>
              <p>Repos</p>
              <p>44</p>
            </div>
            <div>
              <p>Followers</p>
              <p>117</p>
            </div>
            <div>
              <p>Following</p>
              <p>53</p>
            </div>
          </div>
          <div>
            <div className={classes.location}>
              <MdLocationPin />
              <p>Mumbai, India</p>
            </div>
            <div className={classes.link}>
              <BsLink45Deg />
              <p>https://aman-mandal.com</p>
            </div>
          </div>
        </div>
        <div className={classes.repo}>
          {DUMMY_DATA.map((data) => (
            <Repository
              key={data.id}
              title={data.title}
              desc={data.desc}
              stars={data.stars}
              forks={data.forks}
              language={data.language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repos;
