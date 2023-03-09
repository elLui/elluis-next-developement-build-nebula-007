"use client";
import styled from "styled-components";
import IronCircle5 from "@/components/examples/framer-motion/IronCircle5";
import IconCircle2 from "@/components/examples/framer-motion/iconCircle2";
import IconCircle1 from "@/components/examples/framer-motion/iconCircle1";
import IconCircle3 from "@/components/examples/framer-motion/iconCircle3";
import IconCircle4 from "@/components/examples/framer-motion/IconCircle4";
import Hero from "@/components/hero/hero";

// const inter = Inter({subsets: ['latin']})

const HomeMain = styled.main`

`;


export default function Home() {
    return (


        <HomeMain className="main">
            <Hero/>
            {/*<IconCircle1/>*/}
            {/*<IconCircle2/>*/}
            {/*<IconCircle3/>*/}
            {/*<IconCircle4/>*/}
            {/*<IronCircle5/>*/}
            <h2>featured posts</h2>
        </HomeMain>


    )
}
