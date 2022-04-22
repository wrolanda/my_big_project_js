import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter"
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/ProfileReducer";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"} />
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
        isAuth: state.auth.isAuth,
    }
};

export default connect (mapStateToProps, {setUserProfile, getProfile: getUserProfileThunkCreator})
(withRouter(ProfileContainer));