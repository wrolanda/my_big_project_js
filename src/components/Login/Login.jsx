import React from 'react'
import LoginReduxForm from "./LoginFormRedux";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import css from "./login.module.css"

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"}/>
  }
  return (
    <div className={css.login}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={ onSubmit } captchaUrl={props.captchaUrl}/>
    </div>
  )
};

mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);