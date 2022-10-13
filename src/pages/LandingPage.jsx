import React from 'react'
import { Hero, AboutSection, SideIndicator, AboutCardWrapper, AboutCard, ProductSection, TestimonialSection, TestimonialCardWrapper } from '../styles/LandingStyles';
import heroImage from '../assets/images/HeroImage.png'
import rechargeImage from '../assets/images/Recharge.png'
import loginIcon from '../assets/icon/Login.svg'
import DashboardIcon from '../assets/icon/Dashboard.svg'
import Spinning from '../assets/icon/Spinning.svg'
import Button from '../components/Button'
import SliderItem from '../components/Landingpage/SliderItem.jsx'
// import  {Navbar} from '../components/Landingpage/Navbar'
import { Footer } from '../components/Landingpage/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { NavBarDashboard } from '../components/NavBarDashboard/NavBarDashboard';

export const LandingPage = () => {
  const navigate = useNavigate()
  const userDetails = {
    firstname: localStorage.getItem("firstname"),
    lastname: localStorage.getItem("lastname"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    username: localStorage.getItem("username"),
    id: localStorage.getItem("id"),
    avatar: localStorage.getItem("avatar"),
  };
  const slideData = [
    {
      name: 'Adekola Johnson',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'King David',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'Paul James',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
  ];

  const handleGetStarted = () => {
    navigate('/signup')
  }

  return (
    <div>
      {/* HERO SECTION  */}
      <NavBarDashboard
        className="container-fluid"
        uploadUrl={userDetails.avatar}
        firstname={userDetails.firstname}
        route="/"
      />
      <Hero>
        <div className='heroText'>
          <p><b>Surplus Airtime? Don’t worry we got you covered</b></p>
          <small>Excess recharge!, this is usually heartbreaking, worry no more.  Now you can exchange your excess airtime for cash value via this platform</small>
          {/* <Link to='/register'><button height='48px' width='185px'>Get Started</button></Link> */}
          <Button text={'Get Started'} radius={4} clickHandle={handleGetStarted} />
        </div>
        <div className='heroImage'><img src={heroImage} alt="" /></div>
      </Hero>

      {/* ABOUT SECTION */}
      <AboutSection id='about'>
        <SideIndicator />
        <div className='aboutDescription'>
          <h2>Change Surplus Airtime to Real Cash</h2>
          <small>In three simple steps, change airtime to cash</small>
        </div>
      </AboutSection>

      <AboutCardWrapper>
        <AboutCard backgroundColor='#FFF1F3'>
          <img src={loginIcon} alt="" />
          <h4>Login or Register</h4>
          <p>First step is to Register, or you can login if you already have an account with us. The registration steps is easy and straightforward .</p>
        </AboutCard>
        <AboutCard backgroundColor='#FFF1F3'>
          <img src={DashboardIcon} alt="" />
          <h4>Deposit From Dashboard</h4>
          <p>After successful registration and email verification, login to your dashboard to access your wallet where you can make deposit.</p>
        </AboutCard>
        <AboutCard backgroundColor='#F5FCF5'>
          <img src={Spinning} alt="" />
          <h4>Convert</h4>
          <p>Then on the dashboard you can convert your recharge card which to cash</p>
        </AboutCard>
      </AboutCardWrapper>

      {/* PRODUCT SECTION */}
      <ProductSection id="product">
        <div className='productDescription'>
          <h2>The best platform for your convenient airtime exchange</h2>
          <p>You can also sell and buy recharge cards via this platform. The basis you need to do is verify you email </p>
          {/* <Link to='/register'><Button height='48px' width='185px'>Get Started</Button></Link> */}
          <Button text={'Get Started'} radius={4} width={171} clickHandle={handleGetStarted} />

        </div>
        <div className='productImage'><img src={rechargeImage} alt="" /></div>
      </ProductSection>


      {/* TESTIMONIAL SECTION */}
      <TestimonialSection id='contactUs'>
        <h1>Hear what our customers are saying</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.</p>
      </TestimonialSection>

      <TestimonialCardWrapper>
        <SliderItem slideData={slideData} />
      </TestimonialCardWrapper>
      <Footer />
    </div>
  )
}
export default LandingPage