import Link from "next/link";

type BookProp = {
  id: number | string;
  title: string;
  authors?: string | null;
  book_code?: string;
  number_of_copies?: number;
  category?: string;
};

export default function BookCard({ book }: { book: BookProp }) {
  const copies = book.number_of_copies ?? 0;
  return (
    <article className="bg-slate-800/60 border border-white/6 rounded-xl p-4 shadow-sm animate-fade-in-up">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 shrink-0 rounded-md bg-[#57068c] flex items-center justify-center text-white font-semibold text-sm">
          {book.book_code ? book.book_code.split(" ")[0] : "BK"}
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold leading-snug text-slate-100">
            <Link href={`/book/${book.id}`} className="hover:underline">
              {book.title}
            </Link>
          </h3>
          <p className="text-sm text-slate-300 mt-1">{book.authors ?? "Unknown author"}</p>

          <div className="mt-2 text-xs text-slate-400 flex gap-2 flex-wrap">
            {book.category && <span className="px-2 py-0.5 rounded bg-white/3">{book.category}</span>}
            {book.book_code && <span className="px-2 py-0.5 rounded bg-white/3">{book.book_code}</span>}
          </div>
        </div>

        <div className="text-right">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              copies > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {copies > 0 ? "Available" : "Unavailable"}
          </div>
          <div className="mt-2 text-xs text-slate-400">{copies} {copies === 1 ? "copy" : "copies"}</div>
        </div>
      </div>
    </article>
  );
}
