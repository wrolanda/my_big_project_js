import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"}
               component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"}
               component={Input} validate={[required]}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;