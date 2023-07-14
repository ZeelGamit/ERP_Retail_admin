import styled from "styled-components";

export const StyledUsers = styled.div`
  font-size: 14px;
  font-family: "poppins";
  height: auto;
  border: none;
  margin-top: auto;`;

export const TotalUser = styled.label`
    font-size: 15px;
    font-weight: 700;
    color: #193566;`;

export const DataTable = styled.table`

tr {
    height: 70px;
    vertical-align: middle;
}

td, th {
    width: 7px;
    text-align: center;
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
    width: 70%;
`;

export const txtSearchUser = styled.input`
    border: none;
    margin-left: 1rem`;