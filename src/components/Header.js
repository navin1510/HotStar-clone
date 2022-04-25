import React, { Component } from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            {/* <Logo src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" /> */}
            <Logo src="/images/Logo.svg" />
            <NavMenu>
                <a><img src="/images/home-icon.svg"/>
                <span>Home</span>
                </a>
                <a><img src="/images/search-icon.svg"/>
                <span>Search</span>
                </a>
                <a><img src="/images/watchlist-icon.svg"/>
                <span>Watch</span>
                </a>
                <a><img src="/images/original-icon.svg"/>
                <span>Original</span>
                </a>
                <a><img src="/images/movie-icon.svg"/>
                <span>Movies</span>
                </a>
                <a><img src="/images/series-icon.svg"/>
                <span>Series</span>
                </a>
            </NavMenu>
            {/* <UserImg src="/images/heart.PNG" /> */}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    // color: #10f5cf;
    background: #090b13;
    display:flex;
    align-item: center;
    padding: 0 36px;
    overflow : hidden;
`

const Logo = styled.img`
    width: 70px;
    // height: 45px;
    // padding : 10px;
`

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    overflow-X:hidden;

    a{
        display : flex;
        align-items: center;
        padding: 0px 20px;
        cursor: pointer;

        img{
            height:20px;
        }
        span{
            font-size:13px;
            margin-left:3px;
            letter-spacing:1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: #ffffffff;
                position:absolute;
                right: 0;
                left : 0;
                bottom: -6px;
                transform-origin : left center;
                opacity:0;
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
                transform : scaleX(0);
            }
        }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity:1;
        }
    }
    }
`
const UserImg = styled.img`
    width: 52px;
    height: 50px;
    border-radius:50%;
    cursor: pointer;
    padding : 10px 0px;
`
