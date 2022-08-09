import React from "react";
import {connect} from "react-redux";
import {
   toggleFollow,
   followSuccess, unfollowSuccess, toggleFollowingProgress,
   getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
} from "../../redux/UsersReducer.ts";
import Users from "./Users";
import css from "./users.module.css"
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
   getCurrentPage, getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getToggleFollowingProgress,
   getTotalUsersCount,
   getUsers
} from "../../redux/uses-selectors";

class UsersContainer extends React.Component {
   componentDidMount() {
      const {pageSize, currentPage} = this.props;
      this.props.getUsers(currentPage, pageSize);
   }

   onPageChanged = (pageNumber) => {
      const {pageSize} = this.props;
      this.props.getUsers(pageNumber, pageSize);
   };

   render() {
      return (
         <>
            <div className={css.preloader}>
               {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
               //toggleFollow={this.props.toggleFollow}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
         </>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      toggleFollowingProgress: getToggleFollowingProgress(state),
      followingInProgress: getFollowingInProgress(state),
   }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// };

export default compose(
   connect(mapStateToProps,
      {
         followSuccess, unfollowSuccess, toggleFollowingProgress,
         getUsers: getUsersThunkCreator, follow: followThunkCreator,
         unfollow: unfollowThunkCreator
      }),
)
(UsersContainer);
