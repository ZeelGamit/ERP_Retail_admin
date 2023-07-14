import styled from 'styled-components';

export const StyledButton = styled.input`
    &[type="submit"] {
        background: #5570F7;
        box-shadow: 0rem 0.188rem 0.313rem rgba(20, 29, 75, 0.26);
        border-radius: 4px;
        height: 35px;
        line-height: 35px;
        width: 100%;
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
        font-size: 1.1em;
        margin-bottom: 10px;
    }
`;

export const Heading = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primaryDark};`;

export const FormDesign = styled.div`
label {
    font-size: 14px;
    color: ${({ theme }) => theme.labelFont};
    font-weight: 600;
    margin-top: 0.5rem;
}

input {
    &[type="text"], &[type="email"], &[type="password"] {
      width: 100%;
      padding: 8px 10px 9px 10px;
      height: 35px;
      border: 1px solid $grey;
      box-sizing: border-box;
      outline: none;
    }
}
`;

export const DiscountFeild = styled.div`
display:flex;
input{
    margin-right: 0.3rem;
}
select {
    border: 1px solid $grey;
    box-sizing: border-box;
    outline: none;
}`;