import { motion } from "framer-motion";
import { styles } from '../styles';
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github } from "../assets";
import { Tilt } from "react-tilt";

const JustForFunCard = ({index, testimonial,title,  source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full rounded-[20px]"
      >
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[18px] font-bold">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{testimonial}</p>
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
            Discover the fun and creative projects I developed in my spare time, born from moments of boredom and bursts of inspiration.
          </p>
          <h2 className={styles.sectionHeadText}>JustForFun.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 text-justify`}>
      {testimonials.map((testimonial, index) => (
  <JustForFunCard
    key={testimonial.id} 
    index={index}
    {...testimonial}
  />
))}
      </div>
    </div>
  );
};

export default sectionWrapper(JustForFun, "");
