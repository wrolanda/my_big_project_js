import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter"
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setUserProfile,
    updateStatusThunkCreator
} from "../../redux/ProfileReducer";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
          userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
      console.log("render PROFILE");
        return (
          <div>
              <Profile {...this.props}
                       profile={this.props.profile}
                       status={this.props.status}
                       updateUserStatus={this.props.updateUserStatus}
              />
          </div>
        )
    }
}

let mapStateToProps = (state) => {
  console.log("mapStateToProps PROFILE");
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
  connect(mapStateToProps, {setUserProfile,
      getProfile: getUserProfileThunkCreator, getUserStatus: getStatusThunkCreator,
      updateUserStatus: updateStatusThunkCreator }),
  withRouter,
 // withAuthRedirect
)(ProfileContainer);