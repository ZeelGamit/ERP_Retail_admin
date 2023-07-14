import styled from 'styled-components';

export const Pagebody = styled.div`
    display: flex;
    margin-bottom: 0%;
    background: #fff;
    width: 350px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 110px auto 20px;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
		    margin-bottom: 10px;

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
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primaryDark};`;
