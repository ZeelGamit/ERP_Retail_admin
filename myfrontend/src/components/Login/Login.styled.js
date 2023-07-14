import styled from 'styled-components';

export const Pagebody = styled.div`
    display: flex;
    background: #fff;
    width: 350px;
    max-width: 100%;
    padding: 25px;
    margin: auto;
    position: relative;
    z-index: 1;
   
}`;

export const FormContainer = styled.div`
    form{
        label {
            font-size: 14px;
            color: ${({ theme }) => theme.labelFont};
            font-weight: 600;
        }
        input {
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
        }
        div{
            position: relative;
		    margin-bottom: 30px;

            input {
                &[type="text"], &[type="email"], &[type="password"], &[type="number"] {
                  width: 100%;
                  padding: 8px 10px 9px 10px;
                  height: 35px;
                  border: 1px solid $grey;
                  box-sizing: border-box;
                  outline: none;
                }
            }
        }
    }`;

export const Textarea = styled.textarea`
width: 100%;
padding: 8px 10px 9px 10px;
border: 1px solid $grey;
box-sizing: border-box;
outline: none;`;

export const Heading = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primaryDark};`;

export const StyledLogo = styled.div`
    position: relative;
    text-align: center;
    margin: 160px auto 10px;
    font-family: "poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 36px;
    color: ${({ theme }) => theme.primaryDark};
    text-shadow: 1px 2px 2px rgba(24, 32, 48, 0.22);
`;
