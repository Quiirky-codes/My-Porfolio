import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants"; // Import experiences array
import { sectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";
import { Box, Container } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div>
    <Box
      sx={{
        position: "relative",
        pl: 3,
        pb: 3,
        pt: 3,
        ml: 1,
        border: "2px solid #6a0dad", // Purple border
        borderRadius: "8px",
        boxShadow: "0 0 10px 2px rgba(138, 43, 226, 0.6)", // Glowing effect
        display: "flex",
        flexDirection: "column",
        alignItems: "left", // Align content to the left
        justifyContent: "center", // Center content vertically
        textAlign: "left", // Align text to the left
      }}
    >
      {/* Experience Title and Details */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <h4 className="text-purple-400 text-[20px] font-semibold">
        {experience.company_name}
      </h4>

      {/* Date Inside the Card */}
      <p className="text-purple-300 text-[16px] mt-2">{experience.date}</p>

      {/* Experience Points */}
      <ul style={{ marginTop: "8px", paddingLeft: "16px", listStyleType: "disc" }}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider "
          >
            {point}
          </li>
        ))}
      </ul>
    </Box>
  </motion.div>
  );
};

const Experience = () => {
  return (
    <Container
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Aligning entire container to the left
        py: 5,
      }}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Transforming Ideas into Impact: Experience in AI, Machine Learning, and Full Stack Development
        </p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Custom Timeline */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 5,
          width: "100%",
          maxWidth: 1000,
        }}
      >
        <Timeline
          sx={{
            pl: 0, // Remove left padding to ensure alignment
            position: "relative",
            "&::before": {
              left: 0, // Force the line to appear at the left
              width: "2px", // Adjust the thickness of the line
              bgcolor: "#6a0dad", // Purple timeline line
            },
          }}
        >
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} sx={{ "&:before": { flex: 0 } }}>
              <TimelineSeparator>
                <TimelineDot 
                    variant="outlined" 
                    color="secondary" 
                    sx={{
                    width: "16px",
                    height: "16px", // Adjust size of dot
                    borderColor: "#6a0dad", // Set purple outline for the dot
                    boxShadow: "0 0 10px 2px rgba(138, 43, 226, 0.8)", // Glowing effect
                  }} />
                <TimelineConnector
                  sx={{
                    bgcolor: "#ffffff", // Purple connector
                    width: "2px", // Connector thickness
                    minHeight: "20px",
                    boxShadow: "0 0 10px 2px rgba(138, 43, 226, 0.8)", // Height of the connector
                  }}
                />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default sectionWrapper(Experience, "Experience");