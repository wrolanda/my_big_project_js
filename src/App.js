import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer.ts";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/ReduxStore";

import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navigate} from "react-router";

const LoginPage = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));


class App extends React.Component {
   catchAllUnhandledErrors = () => {
      alert("Some error occurred");
   };

   componentDidMount() {
      this.props.initializeApp();
      window.addEventListener("unhandledrejection",
         (this.catchAllUnhandledErrors));
   }
   componentWillUnmount() {
      window.removeEventListener("unhandledrejection",
         (this.catchAllUnhandledErrors));
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Suspense fallback={<Preloader/>}>
                  <Routes>
                     {/*<Route path="/my_big_project_js" element={<Navigate to="/profile"/>}/>*/}
                     <Route path="/" element={<Navigate to="/profile"/>}/>
                     <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                     <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                     <Route path='/profile' element={<ProfileContainer/>}/>
                     <Route path="/news" element={<News/>}/>
                     <Route path="/music" element={<Music/>}/>
                     <Route path="/users" element={<UsersContainer title='Самураи'/>}/>
                     <Route path="/settings" element={<Settings/>}/>
                     <Route path="/login" element={<LoginPage/>}/>
                     <Route path="/*" element={<div>404 NOT FOUND</div>}/>
                  </Routes>
               </Suspense>
            </div>
         </div>
      );
   }
}

let mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps,
   {initializeApp})
(App);

const SamuraiJSApp = (props) => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </BrowserRouter>
   )
};

export default SamuraiJSApp;