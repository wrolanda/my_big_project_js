import React from "react";
import {connect} from "react-redux";
import {
  getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
// @ts-ignore
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getToggleFollowingProgress,
  getTotalUsersCount,
  getUsers
  // @ts-ignore
} from "../../redux/uses-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/ReduxStore";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
  toggleFollowingProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number,
             pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type OwnPropsType = {
  title: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {

    const {pageSize, currentPage} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        <div>
          {this.props.isFetching ? <Preloader/> : null}
        </div>
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               followingInProgress={this.props.followingInProgress}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               title={this.props.title}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      getUsers: getUsersThunkCreator, follow: followThunkCreator,
      unfollow: unfollowThunkCreator
    }),
)
(UsersContainer);
