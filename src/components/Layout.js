import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
//import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container fluid>
                {this.props.children}
                <hr />
                <footer>
                    <p>&copy; {(new Date().getFullYear())} -Instituto Cardiovascular de Buenos Aires</p>
                </footer>
            </Container>
        </div>
    );
  }
}
