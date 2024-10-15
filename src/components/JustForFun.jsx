import { motion } from "framer-motion";
import { styles } from '../styles';
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { Tilt } from "react-tilt";

const JustForFunCard = ({ index, title, date, company_name, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-[300px] h-[150px]" // Set a fixed width for each card
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-[20px] cursor-pointer border-2 border-white shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:border-purple-400" // Add border and hover effects
      >
        <div 
          className="h-full w-full" 
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <div className="mt-5">
            <h3 className="text-white text-[18px] font-bold">{title}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
              {company_name} - {date}
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const JustForFun = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Discover the certifications and achievements I have earned in my learning journey.
          </p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      {/* Flex container with justify-center and wrapping */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap justify-center gap-7`}>
        {certifications.map((certification, index) => (
          <JustForFunCard
            key={certification.id}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(JustForFun, "");
