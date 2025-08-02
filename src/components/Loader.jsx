import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    const brandName = "Rétrovie";
    const [percentage, setPercentage] = useState(0);

    const titleContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 40, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: 'spring', stiffness: 100, damping: 12 },
        },
    };
    
    useEffect(() => {
        const duration = 2000;
        const startTime = Date.now() + 1000;
        
        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < 0) return;
            
            const newPercentage = Math.min(Math.floor((elapsedTime / duration) * 100), 100);
            setPercentage(newPercentage);
            
            if (newPercentage >= 100) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div
            className="fixed top-0 left-0 z-90 flex h-full w-full items-center justify-center bg-black text-white"
            exit={{ y: '-100%', transition: { duration: 1, ease: [0.65, 0, 0.35, 1] } }}
        >
            <div className="text-center">
                {/* Animated Title */}
                <motion.h1
                    className="text-[clamp(2.5rem,10vw,5rem)] font-bold tracking-wider"
                    style={{ perspective: '1000px' }}
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {brandName.split('').map((letter, index) => (
                        <motion.span key={index} variants={letterVariants} className="inline-block">
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Animated Line */}
                <motion.div
                    className="mx-auto mt-8 h-px max-w-sm bg-[#f1e4d3]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1, transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 1 } }}
                    style={{ transformOrigin: 'center' }}
                />

                {/* Percentage Counter */}
                <motion.p 
                    className="mt-8 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.5 } }}
                >
                    {percentage}%
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;

