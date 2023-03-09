"use client"
import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {motion} from 'framer-motion';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';

const icons = [
    {icon: '😀', color: '#FFC107'},
    {icon: '😎', color: '#03A9F4'},
    {icon: '😜', color: '#4CAF50'},
    {icon: '🤔', color: '#9C27B0'},
    {icon: '😴', color: '#607D8B'},
];

const Icon = ({icon, color, index, total}) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        const angle = index * ((2 * Math.PI) / total) + time * 0.5;
        const x = Math.sin(angle) * 5;
        const z = Math.cos(angle) * 5;
        meshRef.current.position.x = x;
        meshRef.current.position.z = z;
    });

    const iconVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'linear',
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.mesh
            ref={meshRef}
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
            variants={iconVariants}
            initial="initial"
            animate="animate"
        >
            <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]}/>
            <meshStandardMaterial attach="material" color={color}/>
            <TextGeometry attach="geometry" args={[icon, {size: 0.3, height: 0.05, font: 'arial'}]}/>
            <meshStandardMaterial attach="material" color="#000000"/>
        </motion.mesh>
    );
};

const Nucleus = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
    });

    return (
        <mesh ref={meshRef}>
            <sphereBufferGeometry attach="geometry" args={[0.2, 32, 32]}/>
            <meshStandardMaterial attach="material" color="#FFFFFF"/>
        </mesh>
    );
};

const IronCircle5 = () => {
    return (
        <Canvas>
            <Nucleus/>
            {icons.map((icon, index) => (
                <Icon
                    key={icon.icon}
                    icon={icon.icon}
                    color={icon.color}
                    index={index}
                    total={icons.length}
                />
            ))}
        </Canvas>
    );
};

export default IronCircle5;
