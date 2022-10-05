import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vien-photo-app
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              
              className="header__link"
              to="/photos"
              activeclassname="header__link--active"
            >
              Home
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
export default Header