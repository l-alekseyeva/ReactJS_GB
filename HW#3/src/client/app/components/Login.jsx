import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal, Header, Title, Body, Footer} from 'react-bootstrap';


export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => this.setState({ show: true })}>
            Login
          </Button>

          <Modal
            show={this.state.show}
           onHide={this.handleHide}
           container={this}
           bsSize="small"
           aria-labelledby="contained-modal-title-sm"
         >
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-sm">Sign In</Modal.Title>
           </Modal.Header>
           <Modal.Body>
                <input type="email" placeholder="Ваш e-mail" />
                <input type="password" placeholder="Ваш пароль" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              <Button onClick={this.handleHide}>Sign In</Button>
            </Modal.Footer>
          </Modal>
      </ButtonToolbar>
      </div>
    );
  }
}
