import React from 'react';
import { motion } from 'framer-motion';

const icons = [
    { icon: '😀', color: '#FFC107' },
    { icon: '😎', color: '#03A9F4' },
    { icon: '😜', color: '#4CAF50' },
    { icon: '🤔', color: '#9C27B0' },
    { icon: '😴', color: '#607D8B' },
];

const Icon = ({ icon, color, index, total }) => {
    const angle = index * ((2 * Math.PI) / total);
    const orbitRadius = Math.random() * 100 + 200;
    const orbitSpeed = Math.random() * 10 + 5;

    const iconVariants = {
        initial: {
            opacity: 0,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 0,
        },
        animate: {
            opacity: 1,
            x: Math.sin(angle) * orbitRadius,
            y: Math.cos(angle) * -orbitRadius,
            rotate: angle,
            scale: 1,
            transition: {
                duration: orbitSpeed,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear',
            },
        },
    };

    return (
        <motion.div
            className="icon-wrapper"
            style={{ backgroundColor: color }}
            variants={iconVariants}
        >
            <motion.span
                className="icon"
                role="img"
                aria-label="icon"
                transition={{
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                }}
            >
                {icon}
            </motion.span>
        </motion.div>
    );
};

const IconCircle3 = () => {
    return (
        <div className="container">
            {icons.map((icon, index) => (
                <Icon
                    key={icon.icon}
                    icon={icon.icon}
                    color={icon.color}
                    index={index}
                    total={icons.length}
                />
            ))}
        </div>
    );
};

export default IconCircle3;
