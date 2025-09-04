'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className="gradient-02 z-0"
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Me |"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I am
        <span className="font-extrabold text-white">  Vanshika Rani</span>
        , a Computer Science and Engineering (AI) undergraduate at NIET, Greater Noida, with a strong foundation in Java, Python, and full-stack development. Proficient in
        MERN stack and AI/ML tools
        , I have hands-on experience in building scalable applications and intelligent solutions. During my internship at
        <span className="font-extrabold text-white">  Zoro Innovations</span>
        , I implemented secure authentication, role-based access, and API integrations. At
        <span className="font-extrabold text-white">  IBM SkillsBuild</span>
        , I developed a medical chatbot using LangChain, Pinecone, and AWS. My projects, including
        <span className="font-extrabold text-white">  HireMeet, GenAI SQL Chatbot, and Sonic Runner</span>
        , demonstrate versatility across domains. Passionate about continuous learning, I actively solve DSA problems and pursue certifications.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
