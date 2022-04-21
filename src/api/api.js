import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cffd1188-ee84-4dfc-8a84-b95e15dd0748"
    },
});


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true,
        }).then (response => {
            return response.data;
    })
};

export const getProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
};

export const authMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials: true
    }).then (response => {
        return response.data;
    })
};

export const unfollowAPI = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
        {
            withCredentials: true,
            headers: {
                "API-KEY": "cffd1188-ee84-4dfc-8a84-b95e15dd0748"
            }
        })
        .then(response => {
          return response.data;
        })
};

export const followAPI = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
        {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "cffd1188-ee84-4dfc-8a84-b95e15dd0748"
            }
        })
        .then(response => {
            return response.data;
        })
};