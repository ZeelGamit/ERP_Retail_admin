import styled from "styled-components";

export const LeftCard = styled.div`
border-radius: 1rem;
width: 20%;
position: relative;
margin: 70px 0 0 0;
font-family: "poppins";

  ul{

    li {
        padding: 1rem;
        flex-direction: row;
        border: solid lightgray 1px;
        box-sizing: border-box;
        width: 100%;
        text-align: start;
        font-weight: 500;

        a {
          font-sixe: 100px;
          justify-content: space-between;

          svg {
            margin-right: 10px;
          }
        }
      }
  }
`;

export const RightCard = styled.div`
border-radius: 1rem;
width: 40%;
margin-left: 5%;
position: relative;
margin: 70px 0 0 90px;
font-family: "poppins";
font-size: 14px;

ul {
  li {
    border-bottom: 0 none;
    font-weight: 500;
    color: #193566;
    text-align: left;
  }
  li:nth-child(1) {
    font-weight: 600;
  }

  li div div:nth-child(1) {
    opacity: 0.5;
  }
}
`;