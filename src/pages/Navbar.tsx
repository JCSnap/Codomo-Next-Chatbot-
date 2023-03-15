import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/codomo.jpeg";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: white;
  width: 100%;
  height: 70px;
  z-index: 10;
`;

const NavbarInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  margin: 0 4% 0 4%;
  padding: 2px 0 2px 0;
  background-color: white;
  justify-content: space-between;
`;

const NavbarLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/codomo.jpeg);
  width: 30%;
  max-width: 200px;
  min-width: 200px;
`;

const LogoImage = styled(Image)`
  width: 100%;
  height: 80%;
`;

const NavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  padding-left: 7%;
  width: 70%;
  max-width: 500px;
  min-width: 400px;
  margin: 0 4% 0 4%;
`;

const NavbarItem = styled.div`
  align-self: center;
  font-size: 14px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavbarLogo>
          <LogoImage src={logo} alt="logo" />
        </NavbarLogo>
        <NavbarItems>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Our Work</NavbarItem>
          <NavbarItem>Products</NavbarItem>
          <NavbarItem>Join Us</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <div className="navbar-search"></div>
        </NavbarItems>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
