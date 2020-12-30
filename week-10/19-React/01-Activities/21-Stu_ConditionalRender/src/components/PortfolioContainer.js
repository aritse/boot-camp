import {Component} from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default class PortfolioContainer extends Component {
  state = {currentPage: "Home"};

  handlePageChange = page => this.setState({currentPage: page});

  renderPage = () => {
    switch (this.state.currentPage) {
      case "Home": return <Home/>;
      case "Contact": return <Contact/>;
      case "Blog": return <Blog/>;
      default: return <About/>;
    }
  }

  render() {
    return (
      <div>
        <NavTabs currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
        {this.renderPage()}
      </div>
    )
  }
}