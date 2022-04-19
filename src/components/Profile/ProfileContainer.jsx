import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter"
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect (mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));