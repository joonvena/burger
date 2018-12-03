import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap';

export default class AlertBox extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleDismiss = this.handleDismiss.bind(this);

    
        this.state = {
          show: this.props.show_alert
        };
      }

      handleDismiss() {
        this.setState({ show: false });
      }

      render() {
        if (this.state.show) {
          return (
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              <h4>Oh snap! You got an error!</h4>
              <p>
                Ravintoloita ei löytynyt!
              </p>
            </Alert>
          );
        }
      }
    }