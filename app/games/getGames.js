'use server';
async function GetGames(page,resultsPerPage){
    const response = await fetch("https://api.igdb.com/v4/games",
    { method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Client-ID': 'txjk3oonc2shbnnbvmlu19vy2jqe78',
        'Authorization': '727569y59pkezhbd11id4y04a1h73d ',
    },
        body: `fields name, first_release_date, url; limit ${resultsPerPage}; offset ${page * resultsPerPage}; sort first_release_date desc;`
    })
    .then(response => {
        return response.json();
    })
    .catch(response => {
        console.log("Error:", response.statusText);
        return["Error: " + response.statusText]; 
    });
    return response;
}

export default async function Search(allGames = [], resultsPerPage) {
    for(let i = 0; i < 1; i++){
        console.log("Fetching games...");
        let games = await GetGames(i, resultsPerPage);
        allGames = allGames.concat(games);
    }
    return allGames;
}

