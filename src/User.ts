import {Repo} from "./Repo"

export class User {

    private login: string;
    private fullName: string;
    private repoCount: number;
    private followerCount: number;
    repos: Repo[];

    constructor(apiResponse: any) {
        this.login = apiResponse.login;
        this.fullName = apiResponse.name;
        this.repoCount = apiResponse.public_repos;
        this.followerCount = apiResponse.followers;
        this.repos = [];
    }

}