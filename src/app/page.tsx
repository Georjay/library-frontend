"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/books/`,
    fetcher
  );

  if (error) return <div className="text-red-500">Failed to load books</div>;
  if (isLoading) return <div className="text-gray-400">Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-purple-500 mb-6">
        📚 Library Catalog
      </h1>
      <ul className="space-y-4">
        {data.map((book: any) => (
          <li
            key={book.id}
            className="p-4 bg-gray-800 rounded-xl shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-400">by {book.author}</p>
            <p
              className={`mt-2 text-sm font-medium ${
                book.available ? "text-green-400" : "text-red-400"
              }`}
            >
              {book.available ? "Available" : "Checked Out"}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
