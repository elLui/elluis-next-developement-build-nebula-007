import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";



const SomeFreakingComponent = () => (
    
    <motion.div
        intial={ { opacity : 0, scale : 0.5 } }
        animate={ { opacity : 1, scale : 1 } }
        transition={ { duration : 0.5 } }
    /> );


const NavItemStyles = styled.div`




`;



const NavItem = ( { nav_data } ) => {
    return (
        
        
        <div>
            { nav_data.map( ( { id, label, link, isActive, icon } ) => ( <li key={ id }>
                <Link href={ link } className="navLink">
                    { label }
                    <br/>
                    <SomeFreakingComponent/>
                    <div className="icon_wrapper">
                        { icon }
                    </div>
                </Link>
            </li> ) ) }
        </div>
    
    
    );
};

export default NavItem;
