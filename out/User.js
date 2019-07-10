"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(apiResponse) {
        this.login = apiResponse.login;
        this.fullName = apiResponse.name;
        this.repoCount = apiResponse.public_repos;
        this.followerCount = apiResponse.followers;
        this.repos = [];
    }
}
exports.User = User;
