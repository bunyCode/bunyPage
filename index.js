console.log('Videos')
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1e18a589aemsh8a3c445c6fd67f0p1b5a76jsnd6dd20ad69e5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);

        const view = `${videos.items.map(video => `
            <div class='flex bg-slate-100 flex-col h-80 w-full p-5 rounded-xl justify-between'>
                <img class="aspect-video  object-cover rounded-xl " src="${video.snippet.thumbnails.high.url}"/>
                <p class='text-black font-bold'>${video.snippet.title}</p>
            </div>
        `).slice(0, 4).join('')}`
        console.log(videos)

        content.innerHTML = view
    } catch (err) {
        console.error(err);
    }
})();