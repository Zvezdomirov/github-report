"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
const User_1 = require("./User");
const Repo_1 = require("./Repo");
class GithubApiService {
    getUserInfo(username, cb) {
        request.get(GithubApiService.GITHUB_URI + username, GithubApiService.OPTIONS, (error, response, body) => {
            let user = new User_1.User(body);
            cb(user);
        });
    }
    getRepos(username, cb) {
        request.get(GithubApiService.GITHUB_URI + username + "/repos", GithubApiService.OPTIONS, (error, response, body) => {
            let repoArr = body.map((repo) => new Repo_1.Repo(repo));
            cb(repoArr);
        });
    }
}
GithubApiService.GITHUB_URI = "https://api.github.com/users/";
GithubApiService.OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
exports.GithubApiService = GithubApiService;
