import React from 'react';
import {motion} from 'framer-motion';

const icons = [
    {icon: '😀', color: '#FFC107'},
    {icon: '😎', color: '#03A9F4'},
    {icon: '😜', color: '#4CAF50'},
    {icon: '🤔', color: '#9C27B0'},
    {icon: '😴', color: '#607D8B'},
];

const Icon = ({icon, color, index, total}) => {
    const angle = index * (360 / total);

    const iconVariants = {
        initial: {
            opacity: 0,
            rotate: -180,
            scale: 0,
            x: 0,
            y: 0,
        },
        animate: {
            opacity: 1,
            rotate: angle,
            scale: 1,
            x: Math.sin((angle * Math.PI) / 180) * 200,
            y: Math.cos((angle * Math.PI) / 180) * -200,
        },
    };

    const circleVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1},
    };

    return (
        <motion.div
            className="icon-wrapper"
            style={{backgroundColor: color}}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
            }}
        >
            <motion.span
                className="icon"
                role="img"
                aria-label="icon"
                variants={circleVariants}
                transition={{
                    delay: 0.2,
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

const IconCircle1 = () => {
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

export default IconCircle1;
