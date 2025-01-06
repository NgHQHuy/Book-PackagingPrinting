"use client";
import React, { useEffect } from "react";
import CardItem from "@/components/CardItem";

interface ListRendererProps {
  sortBy?: string;
  temmplate?: string;
}

const ListRenderer: React.FC<ListRendererProps> = () => {
  const data = [1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

  // const fetchData = async () => {
  //   setData([1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  // };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="w-full h-full box-border flex flex-wrap">
      {data.map((item: number, index: number) => (
        <div
          key={index}
          className="basis-[20%] min-w-[180px] flex justify-center flex-grow-0 flex-shrink-0 my-[0.25%] px-[0.25%]"
        >
          <CardItem />
        </div>
      ))}
    </div>
  );
};

export default ListRenderer;
