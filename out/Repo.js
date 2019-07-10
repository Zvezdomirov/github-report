"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repo {
    constructor(apiResponse) {
        this.name = apiResponse.name;
        this.description = apiResponse.description;
        this.url = apiResponse.html_url;
        this.size = apiResponse.size;
        this.forksCount = apiResponse.forks_count;
    }
}
exports.Repo = Repo;
