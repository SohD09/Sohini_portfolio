import React, { useRef } from "react";
import {
  easeInOut,
  inView,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
const textvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  close: {
    y: 50,
    opacity: 0,
  },
};
const progressVariants = {
  open: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 1,
      delay: 0,
    },
  },
  close: {
    opacity: 0,

    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};
const ProgressBar = (props) => {
  let screenWidth = window.innerWidth;
  let circleSize = 100;
  if (screenWidth > 1281) {
    circleSize = 250;
  } else if (screenWidth > 1025) {
    circleSize = 200;
  } else if (screenWidth > 380) {
    circleSize = 170;
  }
  let width = screenWidth > 1025 ? 20 : 10;
  let {
    size = circleSize,
    progress = 0,
    trackWidth = width,
    trackColor = `rgb(51 65 85)`,
    indicatorWidth = width,
    indicatorColor = `rgb(103 232 249)`,
    indicatorCap = `round`,
    label = ``,
    labelColor = `white`,
    spinnerMode = false,
    spinnerSpeed = 1,
    img = "",
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    initialDashOffset = dashArray * 1,
    dashOffset = dashArray * ((100 - progress) / 100);
  const ref = useRef();

  const textControl = useAnimation();
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

          <motion.image
            x={center - size / 4} // Adjust position based on image size
            y={center - size / 4}
            width={size / 2}
            height={size / 2}
            xlinkHref={img}
            onMouseEnter={() => {
              textControl.start("open");
            }}
            onLoad={() => textControl.start("close")}
            onMouseLeave={() => textControl.start("close")}
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0,
              transition: { delay: 0, duration: 1 },
            }}
            style={{ cursor: "pointer" }}
          />
          <motion.text
            x={center}
            y={center - 5}
            fontSize="20"
            fill={labelColor}
            textAnchor="middle"
            className=" w-full h-full cursor-pointer text-3xl font-semibold mobile:text-xl mobile:font-light"
            animate={textControl}
            variants={progressVariants}
          >
            {progress}%
          </motion.text>
        </svg>

        <motion.div
          variants={textvariants}
          initial="close"
          animate="open"
          className="w-full text-2xl font-bold tracking-wider mobile:font-normal"
          style={{ color: labelColor }}
        >
          <span className="w-fit ">{label}</span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProgressBar;
