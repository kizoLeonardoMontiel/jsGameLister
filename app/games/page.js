"use client";
import GamesTable from './gamesTable';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Home() {
    const searchParams = useSearchParams();
    let orderBy = searchParams.get('sort') || 'asc';
    let resultsPerPage = Number(searchParams.get('resultsPerPage')) || 10;
    let page = Number(searchParams.get('page')) || 0;

    return (
        <Suspense>
        <div>    
            <form>
                <h1 className="text-3xl font-bold text-center mt-10 py-4">Game List</h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <label htmlFor="resultsPerPage" className="text-lg font-medium">Results per page:</label>
                    <select
                        name="resultsPerPage"
                        className="border border-gray-300 rounded-md shadow-sm p-2"
                        value={resultsPerPage}
                        onChange={(e) => {
                            resultsPerPage = Number(e.target.value);
                            window.location.search = `?resultsPerPage=${resultsPerPage}&page=${page}`;
                        }}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <label htmlFor="orderBy" className="text-lg font-medium">Order By:</label>
                    <select
                        name="orderBy"
                        className="border border-gray-300 rounded-md shadow-sm p-2"
                        onChange={(e) => {
                            orderBy = e.target.value;
                            window.location.search = `?resultsPerPage=${resultsPerPage}&page=${page}&sort=${orderBy}`;
                        }}
                    >
                        <option value="asc">Release Date Ascending</option>
                        <option value="desc">Release Date Descending</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                        onClick={(e) => {
                            e.preventDefault();
                            page -= 1;
                            window.location.search = `?resultsPerPage=${resultsPerPage}&page=${page}`;
                        }}
                    >
                        Previous Page
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                        onClick={(e) => {
                            e.preventDefault();
                            page += 1;
                            window.location.search = `?resultsPerPage=${resultsPerPage}&page=${page}`;
                        }}
                    >
                        Next Page
                    </button>
                </div>
            </form>
            <GamesTable resultsPerPage={resultsPerPage} page={page} orderBy={orderBy} />
            </div>
        </Suspense>
    );
}