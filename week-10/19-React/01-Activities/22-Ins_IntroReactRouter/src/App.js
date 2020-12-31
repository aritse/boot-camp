import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Learn from './components/pages/Learn';

export default function App() {
  return (
    <Router>
      <NavTabs></NavTabs>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/contact/learn' component={Learn}/>
    </Router>
  )
}