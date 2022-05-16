import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter"
import {connect} from "react-redux";
import {
   getStatusThunkCreator,
   getUserProfileThunkCreator, savePhoto,
   setUserProfile,
   updateStatusThunkCreator
} from "../../redux/ProfileReducer";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      if (!userId) {
         this.props.history.push("/login");
      }
      this.props.getProfile(userId);
      this.props.getUserStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.router.params.userId !== prevProps.router.params.userId) {
         this.refreshProfile();
      }
   }

   render() {
      return (
         <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhoto}
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
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth,
   }
};

export default compose(
   connect(mapStateToProps, {
      setUserProfile,
      getProfile: getUserProfileThunkCreator,
      getUserStatus: getStatusThunkCreator,
      updateUserStatus: updateStatusThunkCreator,
      savePhoto
   }),
   withRouter,
   // withAuthRedirect
)(ProfileContainer);