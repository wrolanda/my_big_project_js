import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, HashRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/ReduxStore";

import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const LoginPage = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));


class App extends React.Component {
   componentDidMount() {
      this.props.initializeApp();
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
                     <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                     <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                     <Route path='/profile' element={<ProfileContainer/>}/>
                     <Route path="/news" element={<News/>}/>
                     <Route path="/music" element={<Music/>}/>
                     <Route path="/users" element={<UsersContainer/>}/>
                     <Route path="/settings" element={<Settings/>}/>
                     <Route path="/login" element={<LoginPage/>}/>
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
      <HashRouter>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </HashRouter>
   )
};

export default SamuraiJSApp;