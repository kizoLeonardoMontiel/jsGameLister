'use server';

async function GetGames(page,resultsPerPage,orderBy){
    const clientID = process.env.CLIENT_ID;
    const secret = process.env.SECRET;
    console.log("order:", orderBy);
    const response = await fetch("https://api.igdb.com/v4/games",
    { method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Client-ID': clientID,
        'Authorization': secret,
    },
        body: `fields name, first_release_date, url; limit ${resultsPerPage}; offset ${page * resultsPerPage}; sort first_release_date asc;`
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

export default async function Search(allGames = [], resultsPerPage, page = 0, orderBy) {
    console.log("Fetching games...");
    let games = await GetGames(page, resultsPerPage, orderBy);
    allGames = allGames.concat(games);
    
    return allGames;
}

