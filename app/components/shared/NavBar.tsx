"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-screen bg-white py-4 px-4 dark:bg-black transition-colors flex flex-col-3 justify-between items-center">
      <div className="text-white">
        <motion.button
          whileHover={{ rotate: "170deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-3xl bg-white text-black dark:bg-black dark:text-white hover:text-slate-800 dark:hover:text-slate-200 transition-colors p-4 rounded-full"
        >
          <FiMenu />
        </motion.button>
      </div>
      <Link href="/">
        <div className="hidden sm:block text-gray-800 font-extrabold text-2xl transition-colors dark:text-gray-200">
          Daniel <span className="font-light ">O&apos;Connor</span> Johnson
        </div>
        <div className="sm:hidden text-gray-800 font-extrabold text-xl transition-colors dark:text-gray-200">
          Daniel Johnson
        </div>
      </Link>
      <div className="transform scale-75">
        <DarkModeToggle />
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.nav
      className={`fixed top-0 bottom-0 w-screen bg-gradient-to-b from-blue-500 to-sky-300 dark:from-indigo-700 dark:to-indigo-300 ${
        isOpen ? "z-50" : "z-10"
      }`}
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-white text-black hover:text-slate-800 border-[1px] border-transparent hover:border-slate-300 transition-colors p-4 rounded-full ml-4 mt-4"
        whileHover={{ rotate: "150deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        <NavLink href="/" text="Home" />
        <NavLink href="/work" text="Work" />
        <NavLink href="/about" text="About" />
        <NavLink href="/blog" text="Blog" />
        <NavLink href="/contact" text="Contact" />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <motion.a
      className="inline-block pl-8 z-10 text-white w-fit font-black text-7xl hover:text-black dark:text-black dark:hover:text-white transition-colors cursor-pointer"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 6,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
        scale: 1.5,
      }}
      rel="nofollow"
      onClick={handleClick}
    >
      {text}
    </motion.a>
  );
};

export default LiquidSideNav;
