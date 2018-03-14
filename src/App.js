import React, { Component } from 'react';

import axios from 'axios';
import { API } from './appconf.js';

import Event from './Event';

import './events.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      provider: 'yogashop',
      from: '2018-03-12',
      to: '2018-03-18',
      events: []
		};
  }

  componentDidMount() {
    const {
      provider, from, to
    } = this.state;
    const api = `${API.BASE}/providers/${provider}/events/public?from=${from}&to=${to}`;
    
    axios.get(
      api
    ).then(res => {
      this.setState({events: res.data});
    });
  }

  renderEvents() {
    return this.state.events.map(event => {
      return (
        <div className="events__list__item" key={event.id}>
          <Event event={event} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="events">
        <div className="events__list">
          {this.renderEvents()}
        </div>
      </div>
    );
  }
}

export default App;
