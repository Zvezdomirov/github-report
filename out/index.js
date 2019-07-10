"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const _ = __importStar(require("lodash"));
let svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username as an argument");
}
else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user) => {
        svc.getRepos(username, (repos) => {
            let sortedRepos = _.sortBy(repos, (repo) => repo.forksCount * -1);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
