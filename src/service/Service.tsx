const baseURL = "https://api.stackexchange.com/2.2/search/advanced?order=desc&site=stackoverflow";

/**
 * API Call for gettgin questions nased on pae number
 * @param page PageNumber
 */
function getQuestion(page: number) {
    const url = `${baseURL}&page=${page}` 
    return fetch(url).then(response => response.json());
}

export {
    getQuestion
}