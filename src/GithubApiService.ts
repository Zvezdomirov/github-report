
import * as request from "request";
import { User } from "./User";
import { Repo } from "./Repo";


export class GithubApiService {

    static readonly GITHUB_URI: string = "https://api.github.com/users/";

    static readonly OPTIONS: any = {
        headers: {
            "User-Agent": "request"
        },
        json: true
    };
    getUserInfo(username: string,
                cb: (user: User) => any): any {

        request.get(GithubApiService.GITHUB_URI + username,
            GithubApiService.OPTIONS,
            (error: any, response: any, body: any) => {
                let user: User = new User(body);
                cb(user);
            });
    }

    getRepos(username: string,
            cb: (repos: Repo[]) => any): any {
        request.get(GithubApiService.GITHUB_URI + username + "/repos",
            GithubApiService.OPTIONS,
            (error: any, response: any, body: any) => {
                let repoArr = body.map((repo: any) => new Repo(repo));
                cb(repoArr);
            }); 
    }
}