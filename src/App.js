import React from 'react';
import { Switch, Route } from "wouter";
import Index from './pages/01_index/index.jsx';
import Contact from './pages/02_Contact/contact.jsx';
import Donate from './pages/03_Donate/donate.jsx';
import Volunteer from './pages/04_Volunteer/volunteer.jsx';
import BlogDashboard from './pages/05_Blogs/01_BlogDashboard/blogdashboard.jsx';
import Blog from './pages/05_Blogs/02_Blog/blog.jsx';
import AccountDeletion from './pages/06_AccountDeletion/accountdelection.jsx';
import PrivacyPolicies from './pages/07_documents/privacypolicies.jsx';
import TermsConditions from './pages/07_documents/termsconditions.jsx';


function Router() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Donate} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/blogdashboard" component={BlogDashboard} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/accountdeletion" component={AccountDeletion} />
      <Route path="/privacypolicies" component={PrivacyPolicies} />
      <Route path="/termsconditions" component={TermsConditions} />
    </Switch>
  );
}

function App() {
  return (
      <Router />
  );
}

export default App;