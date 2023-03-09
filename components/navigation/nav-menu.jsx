"use client"
import React from 'react';
import NavItem from "@/components/navigation/nav-item/nav-item";
import {nav_data} from "@/data/nav-data";
import styled from "styled-components";


const NavMenuNav = styled.ul`

    

`;


const NavMenu = () => {
    return (

        <NavMenuNav>

                <NavItem nav_data={nav_data}/>

        </NavMenuNav>
    );
};

export default NavMenu;
