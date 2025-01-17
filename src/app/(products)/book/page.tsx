import ListBooksFilter from "@/app/(products)/book/components/ListBooksFilter";
import ListBooksSorter from "@/app/(products)/book/components/ListBooksSorter";
import ListRenderer from "@/components/ListRenderer";
import React from "react";

const _template = "BOOK";

export default function Book() {
  return (
    <>
      <div className="flex-1 max-w-80 p-4 bg-white max-md:max-w-full">
        <aside className="w-full h-full flex flex-col">
          <ListBooksFilter />
        </aside>
      </div>
      <div className="flex-1 flex flex-col p-3">
        <div className="w-full h-12 px-[0.25%] flex items-center py-1">
          <ListBooksSorter />
        </div>
        <main className="w-full h-full">
          <ListRenderer temmplate={_template} />
        </main>
      </div>
    </>
  );
}
