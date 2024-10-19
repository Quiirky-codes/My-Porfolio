import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants"; // Import experiences array
import { sectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card relative border-l-4 border-purple-500 pl-8 pb-8 ml-4">
      {/* Glowing Purple Circle */}
      <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-purple-500 shadow-purple-glow flex justify-center items-center"></div>
      
      {/* Experience Title and Details */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <h4 className="text-purple-400 text-[20px] font-semibold">{experience.company_name}</h4>
      
      {/* Date Inside the Card */}
      <p className="text-purple-300 text-[16px] mt-2">{experience.date}</p>
      
      {/* Experience Points */}
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Transforming Ideas into Impact: Experience in AI, Machine Learning, and Full Stack Development
        </p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Custom Timeline */}
      <div className="custom-timeline mt-20 flex flex-col relative">
        {/* Purple Vertical Line for Timeline */}
        <div className="absolute left-4 top-0 h-full border-l-4 border-purple-500"></div>

        {/* Experience Cards */}
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Experience, "Experience");
