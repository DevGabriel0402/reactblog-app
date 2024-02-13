import styled from "styled-components";

export const HeaderContent = styled.div`
  min-width: 1000px;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  padding-block: 32px;

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      gap: 25px;

      li {
        display: flex;
        font-size: 18px;

        a {
          text-decoration: none;
          color: #3b3c4a;
          font-weight: 400;
        }

        .active {
          font-weight: 600;
        }
      }
    }
  }
`;

export const Search = styled.div`
  display: flex;
  position: relative;

  input {
    width: 300px;
    height: 35px;
    border-radius: 25px;
    border: 1px solid transparent;
    background-color: #f4f4f4;
    padding-inline: 15px;

    &:focus {
      outline: none;
      border: 2px solid #313131;
    }
  }

  img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
