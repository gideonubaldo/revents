import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}

class EventForm extends Component {
  state = {
    event: emptyEvent
  }

  componentDidMount() {
    console.log('this is componentDidMount in the Eventform')
    if(this.props.selectedEvent !== null){
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('this is componentWillReceiveProps in the Eventform')
    console.log('current: ', this.props.selectedEvent)
    console.log('next: ', nextProps)
    if(nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  onFormSubmit = (evt) => {
    evt.preventDefault()
    if(this.state.event.id){
      this.props.updateEvent(this.state.event)
    }else{//create event doesnt have an ID
      this.props.createEvent(this.state.event)
    }
    console.log("this is onFormSubmit in the EventForm")
  }
  
  onInputChange = (evt) => {
    const newEvent = this.state.event
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event: newEvent
    })
    console.log("this is onInputChange in the EventForm")
  }
  
  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;

    return (
              <Segment>
                <Form onSubmit={this.onFormSubmit}>
                  <Form.Field>
                    <label>Event Title</label>
                    <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
                  </Form.Field>
                  <Form.Field>
                    <label>Venue</label>
                    <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
                  </Form.Field>
                  <Form.Field>
                    <label>Hosted By</label>
                    <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
                  </Form.Field>
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleCancel} type="button">Cancel</Button>
                </Form>
              </Segment>
    )
  }
}



export default EventForm