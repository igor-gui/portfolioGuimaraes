import styled from "styled-components";

export const StyledHome = styled.main`
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #0E0E13;
    min-height: 862px;
    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: wheat;
        gap: 9px;
        h1 {
            font-size: 24px;
            font-weight: 700;
        }
        h2 {
            font-size: 18px;
        }
    }
    img {
        border-radius: 50%;
        height: 400px;
        margin-bottom: 20px;
    }
    nav {
        margin-top: 50px;
        display: flex;
        gap: 20px;
        a {
            text-decoration: none;
            height: 45px;
            width: 100px;
            background-color: #836156;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: antiquewhite;
            cursor: pointer;
        }
    }

`