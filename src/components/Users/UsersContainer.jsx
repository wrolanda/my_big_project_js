import React from "react";
import {connect} from "react-redux";
import {
  toggleFollow,
  followSuccess, unfollowSuccess, toggleFollowingProgress,
  getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
import css from "./users.module.css"
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(1, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    followingInProgress: state.usersPage.followingInProgress,
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

export default connect(mapStateToProps,
  {
    followSuccess, unfollowSuccess, toggleFollowingProgress,
    getUsers: getUsersThunkCreator, follow: followThunkCreator,
    unfollow: unfollowThunkCreator
  })
(UsersContainer);