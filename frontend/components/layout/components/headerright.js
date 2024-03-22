import styled from "styled-components";
import { useContext } from "react";
import Wallet from './wallet';
import { App } from "../layout";

export const Headerright = () => {
    const Themetoggler = useContext(App);

    return (
        <Headerwrapper>
            <Wallet />
            <Themetoggle onClick={Themetoggler}>
                Themecolor
            </Themetoggle>
        </Headerwrapper>
    );
}

const Headerwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0rem;
`;

const Themetoggle = styled.div`
    background-color: ${(props) => props.theme.bgDiv};
    color: ${(props) => props.theme.color};
    padding: 0.4rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem;

    @media (max-width: 431px) and (max-height: 933px) {
        font-size: 0.5rem;
        padding: 0.2rem;
    }
`;

export default Headerright;
