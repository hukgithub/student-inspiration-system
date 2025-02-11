import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import PrincipalDashboard from './components/dashboards/PrincipalDashboard';
import ParentDashboard from './components/dashboards/ParentDashboard';
import SponsorDashboard from './components/dashboards/SponsorDashboard';

function App() {
  // Assume userRole is fetched from backend (e.g., via API)
  const userRole = 'STUDENT';  // Replace with dynamic value

  return (
    <Router>
      <Switch>
        <Route path="/student" component={StudentDashboard} />
        <Route path="/teacher" component={TeacherDashboard} />
        <Route path="/principal" component={PrincipalDashboard} />
        <Route path="/parent" component={ParentDashboard} />
        <Route path="/sponsor" component={SponsorDashboard} />
        <Route path="/" render={() => {
          window.location.href = `/${userRole.toLowerCase()}`;
          return null;
        }} />
      </Switch>
    </Router>
  );
}

export default App;
