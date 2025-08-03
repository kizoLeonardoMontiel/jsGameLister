import Search from './getGames';

import { useEffect } from 'react';
import { useState } from 'react';

function EpochToDate(date){
    if (date == null){
        return "Unknown date/Unreleased";
    }else{
        return new Date(date * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

export default function GamesTable({resultsPerPage}) {
    let [allGames, setAllGames] = useState([]);
    
    useEffect(() => {
        const fetchGames = async () => {
            setAllGames(await Search(allGames, resultsPerPage));
            console.log("All games fetched:", allGames);
        };
        fetchGames();
    }, [resultsPerPage]);
    
    
    return(
        <table className="bg-white border border-gray-300 shadow-md rounded-lg align-middle mx-auto">
            <thead className="text-2xl text-black-500 font-family:sans-serif font-bold font-weight:700 max-w-md py-4">
                <tr>
                    <th>Name</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody className="text-xl text-black-500 font-family:sans-serif max-w-md px-6 py-4">
                {allGames.map(game => (
                    <tr key={game.id}>
                        <td className="px-6"><a href={game.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{game.name}</a></td>
                        <td className="px-6">{EpochToDate(game.first_release_date)}</td>                    
                    </tr>
                ))}
            </tbody>
            <tfoot className="text-xl text-black-500 font-family:sans-serif font-bold font-weight:700 max-w-md py-4">
                <tr>
                    <td colSpan="2" className="text-align: left">Total Games: {allGames.length}</td>
                    <td className="text-align: right">Page: </td>
                </tr>
            </tfoot>
        </table>
    )
}