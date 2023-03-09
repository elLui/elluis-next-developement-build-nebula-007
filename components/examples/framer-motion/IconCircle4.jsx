import React from 'react';
import { motion } from 'framer-motion';

const bars = [
    { color: '#E1F5FE' },
    { color: '#26C6DA' },
    { color: '#FFEB3B' },
];

const Bar = ({ color, index, total }) => {
    const heightVariants = {
        animate: {
            y: [0, -40, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear',
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.div
            className="bar"
            style={{ backgroundColor: color }}
            variants={heightVariants}
            animate="animate"
        />
    );
};

const IronCircle4 = () => {
    return (
        <div className="container">
            {bars.map((bar, index) => (
                <Bar
                    key={index}
                    color={bar.color}
                    index={index}
                    total={bars.length}
                />
            ))}
        </div>
    );
};

export default IronCircle4;
