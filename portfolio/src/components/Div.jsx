import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Div — animated section wrapper with scroll-triggered reveal.
 */
const Div = ({ children, className = "", delay = 0, ...props }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Div;
