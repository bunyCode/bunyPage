const url = 'https://github-repos.p.rapidapi.com/search?user=samuk-a';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1e18a589aemsh8a3c445c6fd67f0p1b5a76jsnd6dd20ad69e5',
        'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
    }
};

const response = await fetch(url, options)
console.log(response)