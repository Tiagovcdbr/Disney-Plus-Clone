import React from 'react'
import styled from 'styled-components'
// criando o header e inserindo icones e imagens
function Header() {
    return (
        // Inserindo os icones no Header
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href>
                    <img alt="home" src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a href>
                    <img alt="search" src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a href>
                    <img alt="watchlist" src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a href>
                    <img alt="original" src="/images/original-icon.svg" />
                    <span>ORIGINAL</span>
                </a>
                <a href>
                    <img alt="original" src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a href>
                    <img alt="original" src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="" />
        </Nav>
    )
}

export default Header
// estilizando a imagem do header
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`
// Estilizando o Menu Header e aplicando efeitos de transição quando passado o mouse em cima dos icones no Header
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


