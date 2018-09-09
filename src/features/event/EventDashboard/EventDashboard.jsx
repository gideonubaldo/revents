import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import cuid from 'cuid'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { createEvent, deleteEvent, updateEvent } from '../eventActions'

const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
  state = {
            isOpen: false,
            selectedEvent: null
  }

    handleFormOpen = () => {
        this.setState({
          selectedEvent: null,
            isOpen: true
        })
        console.log("this is handleFormOpen in the EventDashBoard")
    }
    handleCancel= () => {
        this.setState({
            isOpen: false
        })
        console.log("this is handlecancel in the EventDashBoard")
    }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent)
    this.setState({
      isOpen: false
    })
    console.log("this is handleCreateEvent in the EventDashBoard")
  }

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent)
    this.setState({
      isOpen: false,
      selectedEvent: null
    })
    console.log("this is handleUpdateEvent from EventDashboard")
    
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
    console.log("this is handleOpenEvent in the EventDashBoard")
  }

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId)
    console.log("this is handleDeleteEvent in the EventDashBoard")
  }

  render() {
    const{ selectedEvent } = this.state;
    const {events } = this.props;
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <Button onClick={this.handleFormOpen} content='create Event' />
                {this.state.isOpen &&
                <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/>}
            </Grid.Column>
        </Grid>
    )
  }
}

export default connect(mapState, actions)(EventDashboard)
