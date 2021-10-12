import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import Layout from './components/ThreeLayout';
import LeftNav from './components/LeftNav';
import Index from './pages/Index';
import Project from './pages/Project';
import BlogList from './pages/BlogList';
import MessageBoard from './pages/MessageBoard';
import MyInfo from './pages/MyInfo';
import BLogDetail from './pages/BlogList/BLogDetail';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import RouteGaurd from './pages/RouteGaurd';
import routes from './Router';
import { connect } from "react-redux";

const authRoutes = routes.map(r => r.path);
class App extends React.Component {
    render() {
        return (
            <RouteGaurd onBeforeChange={(prev, cur, action, commit, unBlock) => {
                console.log(`页面想要从${prev.pathname}跳转到${cur.pathname}，跳转方式是${action}，允许跳转`)
                const user = JSON.parse(localStorage.getItem("isLogin"));
                if(authRoutes.includes(cur.pathname) && !user) {
                    window.history.pushState({}, "", "/login");
                    commit(false);
                    return;
                }
                commit(true);
                // unBlock();//取消阻塞，仅阻塞了一次
            }}
                onChange={(prevLocation, location, action, unListen) => {
                    console.log(`日志：从${prevLocation.pathname}进入页面${location.pathname}，进入方式${action}`)
                    // unListen();//取消监听，仅监听了一次
                }}>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Layout left={<LeftNav />} rightWidth={0}>
                        <Route exact path="/" component={Index}></Route>
                        <Route exact path="/myinfo" component={MyInfo}></Route>
                        <Route exact path="/bloglist" component={BlogList}></Route>
                        <Route exact path="/bloglist/:id" component={BLogDetail}></Route>
                        <Route exact path="/message" component={MessageBoard}></Route>
                        <Route exact path="/project" component={Project}></Route>
                    </Layout>
                    <Route component={NotFound}></Route>
                </Switch>
            </RouteGaurd>
        );
    }
}

export default connect(state => state)(App);
