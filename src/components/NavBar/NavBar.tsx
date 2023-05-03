// todo pass nav logic close logic from layout to navbar comp
import React, { useEffect, useState } from 'react'
import NavBarComp from './NavBarComp'
import { useLocation } from '@reach/router'
import { useNav, useNavDispatch } from '../NavContext';

interface NavBarProps {
    isNavOpen:boolean;
    handleClick:(isOpen:boolean) => void;
}


function NavBar({isNavOpen,handleClick}:NavBarProps) {
    const location = useLocation();
    const dispatch = useNavDispatch();
    const {route} = useNav();
    const [isHover,setIsHover] = useState(false);
    const [hoverLinkTarget,setHoverLinkTarget] = useState<null | string>(null);

    useEffect(() => {
        if (window.location.href.includes('#')) {
            const url = window.location.href.split('#');
            dispatch({
                type:'update',
                payload:url[url.length - 1]
            })
        } else {
            const url = window.location.href.split('/');
            dispatch({
                type:'update',
                payload:url[url.length - 1]
            })
        }
    }, [location])

    const navItems = [
        ['About', '/'],
        ['Projects', '/#projects'],
        ['Resume', '/resume'],
        ['Contact', '/#contact'],
    ]

    const matchRoute = (url:string):string => {
        if (url.replace('/', '').replace("#", '') === route) {
            return ' opacity-100'
        } else {
            return ' opacity-0'
        }
    }

    const handleMouseEnter = (url:string| null = null) => {
        setIsHover(true);
        setHoverLinkTarget(url)
    }

    const handleMouseLeave = () => {
        setIsHover(false);
        setHoverLinkTarget(null)
    }

    return (
        <NavBarComp
            navItems={navItems}
            isNavOpen={isNavOpen}
            handleClick={handleClick}
            matchRoute={matchRoute}
            isHover={isHover}
            handleMouseEnter={handleMouseEnter}
            hoverLinkTarget={hoverLinkTarget}
            handleMouseLeave={handleMouseLeave}
        />
    )
}

export default NavBar