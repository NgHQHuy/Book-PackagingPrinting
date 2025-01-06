import React from "react";
import image from "@/assets/images/u_avatar_default.jpg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";

const CardItem = () => {
  return (
    <div className="w-full h-fit box-border bg-white cursor-pointer hover:shadow-lg hover:-translate-y-1">
      <div className="w-full aspect-square bg-black">
        <Image
          src={image}
          alt="product-preview-image"
          objectFit="cover"
          className="w-full"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <div className="w-full min-h-12 overflow-hidden text-ellipsis line-clamp-2">
          <span className="leading-6">Title</span>
        </div>
        <div className="flex items-center">
          <span className="text-green-800">100.000</span>
          <span className="text-xs text-red-500 ml-1">-33%</span>
        </div>
        <div className="text-xs min-h-12 w-full box-border flex flex-wrap overflow-hidden">
          <span className="border h-fit rounded-md px-1 leading-5 text-red-500 border-red-500 mr-[2px] mb-[2px]">
            tags
          </span>
        </div>
        <div className="flex items-center text-xs justify-between">
          <div>
            <span className="leading-4">Đã bán: 10</span>
          </div>
          <div className="flex items-center">
            <span className="leading-4">0.0</span>
            <StarIcon className="size-4 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
