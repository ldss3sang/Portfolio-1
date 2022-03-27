import { isThrowStatement } from "typescript";


export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type:"tween",
            duration: 2,
            delayChildren:5,
        }
    },
    exit: {
        opacity: 0,
        transformY: -50,
    }
};

export const imgVariants = {
    hidden: { 
        x:100, 
        opacity:0 
    },
    show: { 
        x:0, 
        opacity:1,
        transition: {
            type: "tween",
            duration: 1,
        }
    },
};

export const highlightVariants = {
    hidden: { 
        scaleX: 0,
        opacity: 0,
        backgroundColor: "rgba(0,0,0,1)"
     },
    show: {
        scaleX: [0,1],
        opacity: 1,
        backgroundColor: ["rgba(0,0,0,1)","rgba(0,0,0,1)","rgba(0,0,0,1)","rgba(255,255,255,1)"],
        transition: {
            type: "spring",
            duration: 1,
        }
    },
};

export const SvgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(0,0,0,0)"
    },
    show: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(0,0,0,1)",
        transition: {
            fill: { delay: 1.1, duration: 0.5},
            pathLength: { duration: 3.5, }
        }
    }
};

export const ContactVariants = {
    hidden: {
        opacity: 0,
        y: 500,
    },
    show: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
};