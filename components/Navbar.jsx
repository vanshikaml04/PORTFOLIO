'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[40px] h-[40px] object-contain"
      />
      <h1 className="font-extrabold text-[40px] leading-[30px] text-white">
        VANSHIKA RANI
      </h1>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[40px] h-[40px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
