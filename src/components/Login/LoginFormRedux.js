import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import css from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"}
               component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"}
               component={Input} validate={[required]}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
      </div>
      {error &&
        <div className={css.formSummaryError}>{error}</div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;