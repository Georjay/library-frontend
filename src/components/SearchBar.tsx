"use client";

import { useEffect, useState } from "react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by title, author, or code...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [local, setLocal] = useState(value ?? "");

  // debounce updates to parent
  useEffect(() => {
    const t = setTimeout(() => onChange(local), 300);
    return () => clearTimeout(t);
  }, [local, onChange]);

  return (
    <div className="w-full">
      <input
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-400
                   focus:outline-none focus:ring-2 focus:ring-[#57068c] focus:border-transparent transition"
        aria-label="Search"
      />
    </div>
  );
}
