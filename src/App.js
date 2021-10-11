import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from './components/ThreeLayout';
import LeftNav from './components/LeftNav';
import Index from './pages/Index';
import Project from './pages/Project';
import BlogList from './pages/BlogList';
import MessageBoard from './pages/MessageBoard';
import MyInfo from './pages/MyInfo';

// import { renderRoutes } from "react-router-config"

// import routes from "./Router"
import BLogDetail from './pages/BlogList/BLogDetail';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout left={<LeftNav />} rightWidth={0}>
                        {/* <HeaderBread /> */}
                        {/* {
                        routes.map((r, i) => (<Route key={i} path={r.path} exact>
                            {({ match }) => (
                                <CSSTransition
                                    in={match !== null}
                                    timeout={500}
                                    classNames="my-node"
                                    unmountOnExit
                                >
                                    <div className="my-node">
                                        <r.component />
                                    </div>

                                </CSSTransition>
                            )}
                        </Route>)
                        )
                    } */}
                        <Route exact path="/" component={Index}></Route>
                        <Route exact path="/myinfo" component={MyInfo}></Route>
                        <Route exact path="/bloglist" component={BlogList}></Route>
                        <Route exact path="/bloglist/:id" component={BLogDetail}></Route>
                        <Route exact path="/message" component={MessageBoard}></Route>
                        <Route exact path="/project" component={Project}></Route>
                        {/* { renderRoutes(routes) } */}
                    </Layout>
                </Switch>
            </Router>
        );
    }
}

export default App;
