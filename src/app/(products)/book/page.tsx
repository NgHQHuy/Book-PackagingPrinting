import BookSidebar from "@/app/(products)/book/components/BookSidebar";
import ListBooksFilter from "@/app/(products)/book/components/ListBooksFilter";
import ListRenderer from "@/components/ListRenderer";
import React from "react";

const _template = "BOOK";

export default function Book() {
  return (
    <>
      <div className="flex-1 max-w-80 p-4 bg-white max-md:max-w-full">
        <aside className="w-full h-full flex flex-col">
          <BookSidebar />
        </aside>
      </div>
      <div className="flex-1 flex flex-col p-3">
        <div className="w-full h-12 px-[0.25%] flex items-center py-1">
          <ListBooksFilter />
        </div>
        <main className="w-full h-full">
          <ListRenderer temmplate={_template} />
        </main>
      </div>
    </>
  );
}
