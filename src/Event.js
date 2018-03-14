import React, { Component } from 'react';

import './events.css';

class Event extends Component {
  constructor(props) {
		super(props);
		this.state = {
      descHidden: true
    };

    this.toggleDesc = this.toggleDesc.bind(this);
  }

  toggleDesc() {
    this.setState({
      descHidden: !this.state.descHidden
    });
  }

  render() {
    let event = this.props.event;
    let startDate = new Date(event.startDateTime).toString().split(' ');
    let endDate = new Date(event.endDateTime).toString().split(' ');
    return (
      <div className="event">
        <div className="event__pic" style={{backgroundImage: `url(${event.eventGroup.imageUrl})`}}>
          <span className="event__title">{event.name}</span>
        </div>

        <div className="event__info">
          <div className="event__info__meta">
            <div className="event__info__time">
              <div className="event__info__time__day">
                {`${startDate[0]}. ${startDate[2]} ${startDate[1]}. ${startDate[3]}`}
              </div>
              <div className="event__info__time__time">
                {`${startDate[4].slice(0,5)} - ${endDate[4].slice(0,5)}`}
              </div>
            </div>
            <div className="event__info__type">
              Type
            </div>
            <div className="event__info__location">
              {event.location.name}
            </div>
            <div className="event__info__trainer">
              {event.trainers[0].imageUrl 
                ? <img className="event__info__trainer__pic" src={event.trainers[0].imageUrl} /> 
                : ''
              }
              <div className="event__info__trainer__name">
                {event.trainers[0].name}
              </div>
            </div>
          </div>
          <div 
            className={'event__info__desc ' + (this.state.descHidden ? '' : 'is-visible')}
            dangerouslySetInnerHTML={{__html: event.descriptions[0].text}}
            onClick={this.toggleDesc}
          >
          </div>
        </div>

        <div className="event__booking">
          <div className="event__booking_slots">
            {event.seats - event.seatsBooked}/{event.seats} verfügbar
          </div>
          <button className="event__booking__btn">Zur Buchung</button>
          <div>
            Buchung bis:
            
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
