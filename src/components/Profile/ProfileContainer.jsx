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
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
          <div>
              <Profile {...this.props} profile={this.props.profile}
                       status={this.props.status}
                       updateUserStatus={this.props.updateUserStatus}

              />
          </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
    }
};

export default compose(
  connect(mapStateToProps, {setUserProfile,
      getProfile: getUserProfileThunkCreator, getUserStatus: getStatusThunkCreator,
      updateUserStatus: updateStatusThunkCreator }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);