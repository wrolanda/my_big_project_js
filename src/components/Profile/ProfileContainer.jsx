import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter"
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/ProfileReducer";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
};

export default compose(
  connect (mapStateToProps, {setUserProfile,
      getProfile: getUserProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);