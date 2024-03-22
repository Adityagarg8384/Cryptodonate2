import styled from 'styled-components';
import Headerlogo from './components/headerlogo';
import Headernav from './components/headernav';
import Headerright from './components/headerright';



export const Header = () => {
  return (
    <HeaderWrapper>
        <Headerlogo/>
        <Headernav/>
        <Headerright/>
    </HeaderWrapper>
  )
}

const HeaderWrapper= styled.div`
width: 100%;
height: 70px;
border: 2px red solid;
display: flex;
justify-content: space-between;
align-items:center;
// opacity: 0.5;
// background-color: ${(props)=> props.theme.col};
// background-image: ${(props)=> props.theme.navImage};
// color: ${(props)=> props.theme.col};
`

export default Header
