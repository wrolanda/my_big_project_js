import css from './ProfileInfo.module.css'
import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true)
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    };

  return (
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={ activateEditMode }>{props.status || "--------"}</span>
      </div>
      }
      {editMode &&
      <div>
        <input onChange={ onStatusChange }
               onBlur={ deActivateEditMode }
               autoFocus={true}
               value={status}
        />
      </div>
      }
    </div>
  )
};

export default ProfileStatusWithHooks;