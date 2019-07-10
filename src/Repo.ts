export class Repo {

    constructor(apiResponse: any) {
        this.name = apiResponse.name;
        this.description = apiResponse.description;
        this.url = apiResponse.html_url;
        this.size = apiResponse.size;
        this.forksCount = apiResponse.forks_count;
    }
    
    name: string;
    description: string;
    url: string;
    size: number;
    forksCount: number;
}