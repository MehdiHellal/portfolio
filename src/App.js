// App.jsx
 
import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// Import the BrowserRouter, Route and Link components
import { Link } from 'react-router-dom'; 
//import Projects from './Projects.js'; 
//import Articles from './Articles.js'; 
import Main from './Components/Main'; 
import './App.css';
 
function App() {
  return (
    
    <div className="demo-big-content">
    <Layout>
        <Header className="header-bgcolor" title={<Link style={{textDecoration:'none', color:'white'}}
    to="/">Home</Link>} scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Activity">Activities</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}}
    to="/">Home</Link>}>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Activity">Activities</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

     
    
    
  );
}
 
export default App;