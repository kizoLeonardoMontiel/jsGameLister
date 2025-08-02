"use client";
import GamesTable from './gamesTable';

import { useSearchParams } from 'next/navigation';

export default function Home() {
    const searchParams = useSearchParams();
    let resultsPerPage = Number(searchParams.get('resultsPerPage')) || 10;
    console.log("Results per page:", resultsPerPage);

    return (
        <div>
            <form>
                <h1 className="text-3xl font-bold text-center mt-10 py-4">Game List</h1>
                <select
                    className="max-w-md mx-auto mt-4 mb-6 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={resultsPerPage}
                    onChange={(e) => {
                        resultsPerPage = Number(e.target.value);
                        window.location.search = `?resultsPerPage=${resultsPerPage}`;
                    }}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </form>
            <GamesTable resultsPerPage={resultsPerPage} />
        </div>
    );
}