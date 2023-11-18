import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: fixed; 
    padding: 1rem ;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1; 
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`

export const Searcher = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
    color: black;
    outline: none;
    font-size: .9rem;
    font-weight: 300;
    padding: .5rem 1rem;
    background-color: #fff;
    border: none;
    width: 100%;
    border-radius: .4rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        &::placeholder{
          font-style: italic;
        }

        &:focus{
            outline: 1px solid;
            font-weight: 300;
        }
    }
    
    i{
    position: absolute;
    right: 0;
    z-index: 10;
    border: none;
    color: #0bade3c7;
    background-color: #fff;
    border-radius: .4rem;
    padding: .4rem .9rem .3rem .9rem;
    }
`

export const LoginBtn = styled.button`  
    background: linear-gradient(to bottom, #55f0ff,#55d2ff) ;
    padding: .6rem 1.6rem;
    border: none;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
    border-radius: .8rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:hover{
        background: #55f0ff;
    }
`