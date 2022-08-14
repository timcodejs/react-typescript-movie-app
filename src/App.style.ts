import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    a {
        color: #000;
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    p {
        margin: 0;
        padding: 0 20px;
    }
    img {
        height: 100%;
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
    }
    /* & ul::-webkit-scrollbar{ display:none; } */
    li {
        list-style: none;
        border-radius: 5px;
        margin: 10px;
    }
    form {
        display: flex;
        align-items: end;
    }
    .list-box {
        width: 100%;
        position: absolute;
        margin-top: 150px;
        display: flex;
        justify-content: space-between;
    }
    .list-btn {
        background: none;
        border: 0;
    }
    .nav {
        align-items: flex-end;
    }
    .nav a {
        color: #fff;
    }
    .movie_list {
        overflow-x: scroll;
        -ms-overflow-style: none;
    }
    .movie_list li {
        box-shadow: 5px 5px 5px #d9d9d9;
    }
    .movie_list li div:nth-child(1) {
        width: 200px;
        height: 300px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .movie_list li div:nth-child(2) {
        border-top: 1px solid #d9d9d9;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .movie_text {
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
    }
    .movie_text p {
        margin: 2px 0;
    }
    .movie_title {
        padding: 0;
        font-weight: bold;
    }
`;