import styled from 'styled-components';

export const Pagebody = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0%;
    background: #fff;
    width: 360px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 110px auto auto auto;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    height: 80vh;

    a {
        text-decoration: none;
        color: red;
    }

    div:nth-child(5) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; 
        border-radius: 5px;
        border:1px solid rgba(0, 0, 0, 0.3);
        height: 50px;
        color: red;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        margin-top: auto;

        #first {
            padding: 10px 5px;
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

export const Body = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        border:1px solid rgba(0, 0, 0, 0.3);
        margin: 10px 0;
        height: 50px;
        color: ${({ theme }) => theme.primaryDark};
        font-size: 1.2rem;
        font-weight: 600;

        #first {
            padding: 5px 5px;
        }
        #last {
            margin-left: auto;
            padding-right: 5px;
        }
`;