"use client";
import { LabelRenderer } from "@/components/elements/LabelRenderer";
import { CategoryType } from "@/utils/constants/type/book";
import React, { useState } from "react";

const ListBooksFilter = () => {
  const [listCategories, setListCategories] = useState<
    Array<{ category: CategoryType; isSelected: boolean }>
  >([
    {
      category: { id: 1, name: "item1" },
      isSelected: false,
    },
    {
      category: { id: 2, name: "item2" },
      isSelected: false,
    },
    {
      category: { id: 3, name: "item3" },
      isSelected: false,
    },
  ]);
  const selectCategory = (value: string | number) => {
    setListCategories([
      ...listCategories.map((item) =>
        item.category.id == value
          ? { ...item, isSelected: !item.isSelected }
          : item
      ),
    ]);
  };

  return (
    <div>
      <div className="text-xl font-semibold py-2 border-b-[1px] border-black">
        Filter
      </div>
      <div className="text-sm py-2">
        <span className="font-semibold">Category</span>
        <div className="mt-1 px-2 flex gap-1 flex-wrap"></div>
      </div>
      <div className="text-sm py-2">
        <span className="font-semibold">Genre</span>
        <div className="mt-1 px-2 flex gap-1 flex-wrap">
          {listCategories &&
            listCategories.map((item, index) => (
              <LabelRenderer
                text={item.category.name || ''}
                value={item.category.id || ''}
                onSelect={selectCategory}
                key={index}
                isSelected={item.isSelected}
              />
            ))}
        </div>
      </div>
      <div className="text-sm py-2">
        <span className="font-semibold">Price range</span>
        <div className="mt-1 px-2 flex gap-1 flex-wrap">
          <div className="h-8 px-1 flex items-center border border-gray-400 rounded-md">
            <input
              type="text"
              placeholder="Minimum price"
              className="outline-none placeholder:text-xs"
            />
          </div>
          <div className="h-8 px-1 flex items-center border border-gray-400 rounded-md">
            <input
              type="text"
              placeholder="Maximum price"
              className="outline-none placeholder:text-xs"
            />
          </div>
        </div>
      </div>
      <div className="text-sm py-2">
        <span className="font-semibold">Language</span>
        <div className="mt-1 w-full px-2">
          <div className="w-full flex items-center">
            <input type="radio" name="_language" value="vn" id="_lang-all" />
            <label htmlFor="_lang-vn">All</label>
          </div>
          <div className="w-full flex items-center">
            <input type="radio" name="_language" value="vn" id="_lang-vn" />
            <label htmlFor="_lang-vn">Vietnamese</label>
          </div>
          <div className="w-full flex items-center">
            <input type="radio" name="_language" value="eng" id="_lang-eng" />
            <label htmlFor="_lang-eng">English</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBooksFilter;
