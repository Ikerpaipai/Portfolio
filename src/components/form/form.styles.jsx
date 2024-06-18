import styled from "styled-components";

export const FormContainer = styled.form`
    width: 90%;
    height: 100%;
    background-color: ${props => props.$nightMode ? "#2E3649" : "#CABEFF"};
    border-radius: 20px;
    box-shadow:  ${props => props.$nightMode ? "inset 0 0 4px #656565": "inset 0 0 10px #AB98FF"};
    padding: 22px 10%;
    transition: all 0.3s ease-in-out;
`

export const Row = styled.div`
    display: flex;
    column-gap: 15%;
    justify-content: space-between;

    @media screen and (max-width: 650px) {
        flex-wrap: wrap;
    }
`