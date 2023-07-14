import styled from "styled-components";

export const StyledUsers = styled.div`
  font-size: 14px;
  font-family: "poppins";
  height: auto;
  border: none;
  margin-top: 40px`;

export const HeaderRight = styled.div`
    gap: 8rem;
    background: #ffffff;
    border: 1px solid #e4e9f2;
    border-radius: 5px;
    padding: 0.4rem;
    
    input{
        border: none;
        margin-left: 1rem;
    }`;

export const DataTable = styled.table`

    tr {
        height: 70px;
        vertical-align: middle;
    }

    td, th {
        width: 10px;
        text-align: center;
    }
    td:last-child, td:nth-last-child(2) {
        padding: 0;
    }
    thead {
        color: #97A7C3;
    }

    tbody {
        color: ${({ theme }) => theme.primaryDark};
        font-weight: 500;
    }
`;

export const UserData = styled.div`
    width: 90%;

    label{
        font-size: 20px;
        font-weight: 600;
        color: ${({ theme }) => theme.primaryDark};
        margin-top: 0.5rem;
    }

    select{
        border: 1px solid $grey;
        box-sizing: border-box;
        outline: none;
    }
`;