import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Headernav = () => {
  const router = useRouter();
  return (
    <Nav>
      Select
      <Navbar>
        <Link passHref href={'/'}>
          <NavEle>Home</NavEle>
        </Link>
        <Link href={'/createcampaign'}>
          <NavEle>AddParty</NavEle>
        </Link>
        <Link href={'/donate'}>
          <NavEle>Contribute</NavEle>
        </Link>
        <Link href={'/dashboard'}>
          <NavEle>Dashboard</NavEle>
        </Link>
      </Navbar>
    </Nav>
  )
}

const Nav = styled.div`
  position: relative;
  display: inline-block;
  border: 1px white solid;
  border-radius: 25px;
  padding: 10px;
`

const Navbar = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1;

  ${Nav}:hover & {
    display: block;
  }
`

const NavEle = styled.li`
  color: white;
  list-style: none;
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  
  
`
export default Headernav;
