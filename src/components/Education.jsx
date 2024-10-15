import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { education } from "../constants";
import { sectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, index }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{
      background: index === 0 ? '#ffffff' : index === 2 ? '#ffff00' : education.iconBg,
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {education.company_name}
      </p>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {education.grade}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, idx) => (
          <li
            key={`education-point-${idx}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const EducationTimeline = ({ educationData }) => (
  <div>
    {educationData.map((education, index) => (
      <EducationCard key={education.id} education={education} index={index} />
    ))}
  </div>
);


const Education = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My education has provided me with a robust foundation in AI, ML, Data Science, and Web Development, empowering me to creatively solve complex problems and drive innovation.</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {education.map((education, index) =>(
          <EducationCard key={index}
          education={education}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default sectionWrapper(Education, "education")