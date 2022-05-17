import css from "../ProfileInfo.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import css2 from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({isOwner, handleSubmit, profile, error}) => {
   return <form onSubmit={handleSubmit} className={css.form}>
      {isOwner && <div>
         <button>save</button>
      </div>}
      {error &&
      <div className={css2.formSummaryError}>{error}</div>
      }
      <div>
         <b>Full Name</b> <Field placeholder={"Full Name"} name={"fullName"}
                                          component={Input}/>
      </div>
      <div>
         <b>Looking for a job</b>:
         <Field name={"lookingForAJob"}
                component={Input} type={"checkbox"}/>
      </div>
      <div>
         <b>My professionals skills</b>:
         <Field placeholder={"My professionals skills"} name={"lookingForAJobDescription"}
                component={Textarea}/>
      </div>
      <div>
         <b>About me</b>:
         <Field placeholder={"About me"} name={"aboutMe"}
                component={Textarea}/>
      </div>
      <div>
         <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={css.contact}>
            <b>{key}: <Field placeholder={key} name={"contacts." + key}
                             component={Input}/></b>
         </div>
      })}
      </div>
   </form>
};

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;
