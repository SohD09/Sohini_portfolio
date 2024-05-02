import React, { useRef } from "react";
import { easeInOut, inView, motion, useInView } from "framer-motion";
const textvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.25,
    },
  },
  close: {
    y: 50,
    opacity: 0,
  },
};
const ProgressBar = (props) => {
  let {
    size = 250,
    progress = 0,
    trackWidth = 20,
    trackColor = `rgb(51 65 85)`,
    indicatorWidth = 20,
    indicatorColor = `rgb(103 232 249)`,
    indicatorCap = `round`,
    label = ``,
    labelColor = `white`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    initialDashOffset = dashArray * 1,
    dashOffset = dashArray * ((100 - progress) / 100);
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <>
      <motion.div
        variants={textvariants}
        initial="close"
        animate="open"
        className="svg-pi-wrapper flex-col text-center "
        style={{ width: size * 2, height: size + 10 }}
      >
        <svg className="svg-pi m-auto " style={{ width: size, height: size }}>
          <circle
            className="svg-pi-track "
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(34 211 238)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(168 85 247)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <motion.circle
            ref={ref}
            className={`svg-pi-indicator`}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke="url(#grad)"
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeLinecap={indicatorCap}
            strokeDashoffset={initialDashOffset}
            whileInView={
              inView && {
                strokeDashoffset: dashOffset,
                transition: { delay: 0.25, duration: 0.75 },
              }
            }
          />
          <text
            x={center}
            y={center + 5}
            fontSize="20"
            fill={labelColor}
            textAnchor="middle"
            className=" w-full h-full cursor-pointer text-3xl font-semibold"
          >
            {progress}%
          </text>
        </svg>
        {
          <motion.div
            variants={textvariants}
            initial="close"
            animate="open"
            className="w-full text-2xl font-bold tracking-wider"
            style={{ color: labelColor }}
          >
            <span className="w-fit ">{label}</span>
          </motion.div>
        }
      </motion.div>
    </>
  );
};

export default ProgressBar;
