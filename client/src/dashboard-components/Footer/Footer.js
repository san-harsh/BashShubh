
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <p className="copyright text-center">
            © {new Date().getFullYear()}{' '}
            <a href="#">BRIKMAN</a>, made with
            love for a better web
          </p>
        </Container>
      </footer>
    )
  }
}

export default Footer;
