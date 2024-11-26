import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div
      variance={fadeIn("up","spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-[20px] sm:w-[360px] w-full"
      style={{ height: '550px' }}  // Set a fixed height for the entire card
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[18px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] overflow-hidden">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Explore my innovative projects that blend cutting-edge technology with artistic creativity.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
            >
              My projects highlight the synergy between technology and creativity across AI, ML, Data Science, and Web Development. 
              Each reflects my dedication to solving real-world problems through neural networks, NLP, and computer vision, often enhanced with digital art and design for impactful user experiences. 
              These projects showcase both my technical expertise and my passion for leveraging creativity to drive meaningful outcomes !
            </motion.p>

        </div>
        <div className="mt-20 flex flex-wrap gap-7 text-justify">
          {projects.map((project, index) =>(
            <ProjectCard key={`project-${index}`}
            index={index}
            {...project}/>
          ))}
        </div>
    </>
  )
}

export default sectionWrapper(Project,"project");