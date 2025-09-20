import { NextResponse } from "next/server";

export async function GET() {
  const books = [
    {
      id: 1,
      title: "Introduction to African Literature",
      author: "Ama Ata Aidoo",
      year: 1992,
      available: true,
    },
    {
      id: 2,
      title: "Artificial Intelligence and Society",
      author: "John Doe",
      year: 2020,
      available: false,
    },
    {
      id: 3,
      title: "Data Colonialism Explained",
      author: "Nick Couldry",
      year: 2019,
      available: true,
    },
  ];

  return NextResponse.json(books);
}
