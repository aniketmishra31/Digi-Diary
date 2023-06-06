import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Create from "./components/Create";
import AuthNavbar from "./components/AuthNavbar";
import Help from "./components/Help";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Update from "./components/Update";
import Home from "./components/Home";


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Cover id="" />
            <Footer />
          </Route>
          <Route exact path="/home/:id">
            <Home />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <Signup />
            <Footer />
          </Route>
          <Route exact path="/users/:id">
            <AuthNavbar />
            <Profile />
          </Route>
          <Route exact path="/users/:id/create">
            <AuthNavbar />
            <Create />
            <Footer />
          </Route>
          <Route exact path="/users/:id/:post_id">
            <AuthNavbar />
            <Post />
          </Route>
          <Route exact path="/help">
            <Navbar />
            <Help />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route exact path="/users/:id/:post_id/update">
            <AuthNavbar />
            <Update />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;