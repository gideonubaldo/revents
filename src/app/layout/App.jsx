import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import Navbar from '../../features/nav/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import PeopleDashBoard from '../../features/user/PeopleDashBoard/PeopleDashBoard'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventForm from '../../features/event/EventForm/EventForm'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import HomePage from '../../features/home/HomePage'
import TestComponent from '../../features/testarea/TestComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route path="/(.+)" render={() => (
          <div>
          <Navbar />
           <Container className="main">
            <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashBoard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;