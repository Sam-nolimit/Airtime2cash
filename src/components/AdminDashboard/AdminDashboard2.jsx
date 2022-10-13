import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { NavBarDashboard } from '../NavBarDashboard/NavBarDashboard'
import overviewIcon from './images/OverviewLogo.svg'
import transactionArrows from './images/TransactionArrows.svg'
import OverviewTable2 from './Table/OverviewTable2';
import { useState } from "react";


import './styles/sidebarTabs.css'


function LeftTabsExample() {

  const [key, setKey] = useState("first");

  const handleOptions = (k) => {
    setKey(k);
  }

  const userDetails = {
    firstname: localStorage.getItem("firstname"),
    avatar: localStorage.getItem("avatar"),
  };

  return (
    <>
      <NavBarDashboard
        className="container-fluid"
        uploadUrl={userDetails.avatar}
        firstname={userDetails.firstname}
        route="/"
      />
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        onSelect={(k) => handleOptions(k)}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">

              <Nav.Item>
                <Nav.Link className="side-tab" eventKey="first"><img src={overviewIcon} className="side-tab-icon" alt="" />Overview</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="side-tab" eventKey="second"> <img src={transactionArrows} className="side-tab-icon" alt="" />Transactions</Nav.Link>
              </Nav.Item>

            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <OverviewTable2 type="pending" key={key} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <OverviewTable2 type="all" key={key} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default LeftTabsExample;