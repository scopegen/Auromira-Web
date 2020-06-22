import React from 'react';
import './App.css';
import Loadable from 'react-loadable';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import useScript from './utils/useScript';
import useLink from './utils/useLink';
import scripts from './components/home/exposeScripts';
import links from './components/home/exposeStyles';

function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return <h3>Loading...</h3>;
  }
}

const Home = Loadable({
  loader: () => import('./components/home'),
  loading: Loading
});

const DigitalMarketing = Loadable({
  loader: () => import('./components/DigitalMarketing'),
  loading: Loading
});

const AudioVisualPhotography = Loadable({
  loader: () => import('./components/AudioVisualPhotography'),
  loading: Loading
});

const Promotion = Loadable({
  loader: () => import('./components/Promotion'),
  loading: Loading
});
const StaticBranding = Loadable({
  loader: () => import('./components/StaticBranding'),
  loading: Loading
});
const PrintingCollaterals = Loadable({
  loader: () => import('./components/PrintingCollaterals'),
  loading: Loading
});
const Hoarding = Loadable({
  loader: () => import('./components/Hoarding'),
  loading: Loading
});
const SoftwareITProducts = Loadable({
  loader: () => import('./components/SoftwareITProducts'),
  loading: Loading
});
const EventManagment = Loadable({
  loader: () => import('./components/EventManagment'),
  loading: Loading
});

const AboutUs = Loadable({
  loader: () => import('./components/AboutUs'),
  loading: Loading
});

const Contact = Loadable({
  loader: () => import('./components/Contact'),
  loading: Loading
});

const Footer = Loadable({
  loader: () => import('./components/Footer'),
  loading: Loading
});

const Campaigns = Loadable({
  loader: () => import('./components/Campaigns'),
  loading: Loading
});

const Videos = Loadable({
  loader: () => import('./components/Videos'),
  loading: Loading
});

const Photography = Loadable({
  loader: () => import('./components/Photography'),
  loading: Loading
});

const Animation = Loadable({
  loader: () => import('./components/Animation'),
  loading: Loading
});

const Design = Loadable({
  loader: () => import('./components/Design'),
  loading: Loading
});

const HelpSupport = Loadable({
  loader: () => import('./components/HelpSupport'),
  loading: Loading
});

const PrivacyPolicy = Loadable({
  loader: () => import('./components/PrivacyPolicy'),
  loading: Loading
});
const TermsConditions = Loadable({
  loader: () => import('./components/TermsConditions'),
  loading: Loading
});

const Career = Loadable({
  loader: () => import('./components/Career'),
  loading: Loading
});

const App = () => {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   links.forEach((link, index) => useLink(link, 'css' + index));
   
   // eslint-disable-next-line react-hooks/rules-of-hooks
   scripts.forEach((script, index) => useScript(script, index));

  return (

    <Router>
          <Header />
          
          <Route exact className="meriClass" path="/" component={(Home)} />
          <Route path="/digitalmarketing" component={DigitalMarketing} />
          <Route path="/audiovisualphotography" component={AudioVisualPhotography} />
          <Route path="/promotion" component={Promotion} />
          <Route path="/staticbranding" component={StaticBranding} />
          <Route path="/hoarding" component={Hoarding} />
          <Route path="/printingcollaterals" component={PrintingCollaterals} />
          <Route path="/softwareitProducts" component={SoftwareITProducts} />
          <Route path="/eventmanagment" component={EventManagment} />
          <Route path="/aboutus" component={(AboutUs)} />
          <Route path="/contact" component={Contact} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/videos" component={Videos} />
          <Route path="/photography" component={Photography} />
          <Route path="/animation" component={Animation} />
          <Route path="/design" component={Design} />
          <Route path="/helpSupport" component={HelpSupport} />
          <Route path="/privacyPolicy" component={PrivacyPolicy} />
          <Route path="/termsConditions" component={TermsConditions} />
          <Route path="/career" component={Career} />

          <Footer/>
      </Router>
  );
}
export default App;
