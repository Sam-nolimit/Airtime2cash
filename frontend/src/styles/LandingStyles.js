import styled from "styled-components";

// NAVBAR SECTION

export const Wrapper = styled.div`
  position: absolute;
  position: fixed;
  width: 100%;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 96px;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 10%;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #012a4a;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    overflow: hidden;
    flex-direction: column;
    height: 15rem;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    margin-bottom: ${({ open }) => (open ? "5%" : "0")};
  }
`;
export const MenuLinks = styled.div`
  & .active {
    color: #de3d6d;
    text-decoration: none;
    font-weight: 600;
  }
  a {
    padding: 1rem 1rem;
    width: 6rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #012a4a;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 400;
    &:hover {
      color: #de3d6d;
    }
  }
`;
export const Logo = styled.img`
  padding: 1rem 0;
`;

// HERO BANNER
export const Hero = styled.div`
  padding: 7rem 5% 0 10%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  background-color: rgba(255, 249, 246);
  align-items: center;

  Button{
    width: 185px;
  }

  @media (max-width: 1024px) {
    & .heroText {
      margin: 4% 0 10% 0;
      text-align: center;
      align-items: center;
      & p {
        font-size: 2rem !important;
        line-height: 1 !important;
        letter-spacing: 4px !important;
      }
    }
  }
  & .heroText {
    width: 45%;
    flex-direction: column;
    display: flex;

    & p {
      font-size: 3.4rem;
      font-weight: bolder;
      background: linear-gradient(to right, #de3d6d, #f5844c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 6px;
      line-height: 1.3;

      margin: 0%;
    }
    & small {
      color: #03435f;
      margin: 5% 0%;
      font-weight: lighter;
      line-height: 24px;
      letter-spacing: 1px;
      font-size: 1rem;
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  & .heroImage {
    align-self: end;
    min-width: 20%;
    margin-bottom: -0.4%;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

// ABOUT SECTION

export const AboutSection = styled.div`
  display: flex;
  padding: 60px 10%;
  color: #03435f;

  & .aboutDescription {
    margin: -1% 2% 0 2%;
    width: 40%; 
    & h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 56px;
      margin: 0 0 3% 0;
    }
    & small {
      font-size: 1.1rem;
      font-weight: lighter;
    }
  }
  @media (max-width: 1024px) {
    & .aboutDescription {
      width:  100%;& 
      h2 {
      font-size: 2rem;
      line-height: 36px;
      }
    }
  }
`;
export const SideIndicator = styled.div`
  width: 10px;
  max-width: 10px;
  height: 100;
  border: 2px solid red;
  background-color: #de3d6d;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 45px;
  padding: 0 10%;
  color: #03435f;
  justify-content: center;
`;
export const AboutCard = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#FFF1F3"};
  padding: 25px;
  /* width: 26%; */
  width: 19em;
  align-items: center;
  & p {
    font-weight: lighter;
    line-height: 24px;
    font-size: 14px;
  }
`;

// PRODUCT SECTION
export const ProductSection = styled.div`
  background: linear-gradient(to right, #d8e8bf, #cfaef6);
  margin: 7% 10%;
  border-radius: 24px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  color: #03435f;
  justify-content: space-between;

  @media (max-width:280px){
    width: auto;
    margin:7%  0;
  }
  & .productDescription {
    width: 40%;
    margin: 8% 8% 8% 10%;
    & h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 56px;
      margin: 0 0 3% 0;

    }
    & p {
      font-weight: lighter;
      line-height: 34px;
      margin-bottom: 6%;
    }
  }
  & .productImage {
    align-self: end;
    width: 40%;
    min-width: 40%;
    margin-bottom: -0.3%;
    & img {
      width: 80%;
    }
    @media (max-width: 1024px) {
      & img {
      width: 50%;
    }
    }
  }

  @media (max-width: 1024px) {
    & .productDescription { 
      width: 100%;
      & h2 {
      line-height: 46px;
      text-align: center;
      padding: 20px 0;
      font-size: 20px;
      }
    }
    & .productImage {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 0%;
    }
  }
`;

// TESTIMONIAL SECTION
export const TestimonialSection = styled.div`
  color: #03435f;
  font-size: larger;
  padding: 0% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  & p {
    font-size: 1.1rem;
    font-weight: lighter;
    width: 100%;
    margin: 0 32%;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    & p {
      margin: 0;
    }
  }
`;

export const TestimonialCardWrapper = styled.div`
  padding: 0% 5%;
  display: flex;
  margin-top: 35px;
  .rec.rec-arrow {
  background-color:#F5F5F5; 
}

.rec.rec-arrow:hover {
  background-color:#bcb8b8 !important;

}

`;
export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9% 8%;
  margin: 10px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#F5F5F5"};
  & h3 {
    margin: 5px 0 20px 0;
  }
  & p {
    /* font-size: 0.5rem; */
    font-weight: lighter;
    width: 100%;
    line-height: 26px;
    margin: 0;
  }
`;
// FOOTER SECTION

export const FooterStyle = styled.div`
  margin-top: 5%;
  background-color: #21334f;
  padding: 4% 10% 1% 10%;
  text-align: center;
  color: #fff;
  font-weight: lighter;
  & .footer-logo{
    width: 10rem;
  }
  & .footerMenu {
    display: flex;
    gap: 25px;
    list-style-type: none;
    justify-content: center;
    margin: 3% 0;
  }
`;
export const LowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 0.5px solid #ffffff3e;
  padding-top: 2%;
  & .socials-wrapper {
    display: flex;
    width: 10rem;
    gap: 20px;
    justify-content: end;
  }
  & .social-icon {
    border-radius: 50px;
    padding: 8px;
    background-color: #f2f2f223;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  & .social-icon:hover {
    color: #de3d6d;
    transition: all 0.3s ease-in-out;
  }
  & .establish {
    display: flex;
    width: 50em;
    font-size: 1rem;
    justify-content: start;
    /* flex-grow: 0; */
  }
  @media (max-width: 1024px) {
    & .socials-wrapper {
      width: 100%;
      justify-content: center;
    }
    & .establish {
      width: 100%;
      justify-content: center;
    }
  }
`;