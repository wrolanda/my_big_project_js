import * as axios from "axios";

const instanceAuth = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cffd1188-ee84-4dfc-8a84-b95e15dd0748"
    },
});

const instanceNoAuth = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instanceAuth.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    unfollowAPI(id) {
        return instanceAuth.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    followAPI(id) {
        return instanceAuth.post(`follow/${id}`, {}).then(response => {
            return response.data;
        })
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanceNoAuth.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instanceNoAuth.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanceAuth.put(`profile/status`, { status: status })
    }
};

export const authAPI = {
    me() {
        return instanceAuth.get(`auth/me`).then(response => {
            return response.data;
        })
    },
};