import React from "react";
import angular from "../assets/tech/angular.png";
import bootstrap from "../assets/tech/bootstrap.png";
import clang from "../assets/tech/clang.png";
import cplus from "../assets/tech/cplus.png";
import css from "../assets/tech/css.png";
import express from "../assets/tech/express.png";
import figma from "../assets/tech/figma.png";
import flutter from "../assets/tech/flutter.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import java from "../assets/tech/java.png";
import javascript from "../assets/tech/javascript.png";
import keras from "../assets/tech/keras.png";
import mongodb from "../assets/tech/mongodb.png";
import mysql from "../assets/tech/mysql.png";
import nodejs from "../assets/tech/nodejs.png";
import npm from "../assets/tech/npm.png";
import numpy from "../assets/tech/numpy.png";
import pandas from "../assets/tech/pandas.png";
import python from "../assets/tech/python.png";
import reactjs from "../assets/tech/reactjs.png";
import tensorflow from "../assets/tech/tensorflow.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import { sectionWrapper } from "../HOC";
import { styles } from "../styles";

const TechStack = () => {
  const tech = [
    {
      id: 1,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 3,
      src: clang,
      title: "C",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: cplus,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 7,
      src: figma,
      title: "Figma",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 13,
      src: keras,
      title: "Keras",
      style: "shadow-red-500",
    },
    {
      id: 14,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-white",
    },
    {
      id: 17,
      src: npm,
      title: "NPM",
      style: "shadow-red-500",
    },
    {
      id: 18,
      src: numpy,
      title: "Numpy",
      style: "shadow-sky-500",
    },
    {
      id: 19,
      src: pandas,
      title: "Pandas",
      style: "shadow-pink-500",
    },
    {
      id: 20,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 21,
      src: reactjs,
      title: "ReactJs",
      style: "shadow-sky-500",
    },
    {
      id: 22,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-orange-500",
    },
    {
      id: 23,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 24,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-600",
    },
  ];

  return (
    <div>
      <div>
      <p className={styles.sectionSubText}>Experienced with a variety of tools and frameworks to bring ideas to life.</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">
        {tech.map(({ id, src, title, style }) => (
          
          <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
          
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="text-white text-[18px] font-bold">{title}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(TechStack, "");
