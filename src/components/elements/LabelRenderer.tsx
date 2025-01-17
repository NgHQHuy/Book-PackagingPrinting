import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface LabelProps {
  text: string;
  value: string | number;
  onSelect?: (value: string | number) => void;
  onRemove?: (value: string | number) => void;
  isSelected?: boolean;
}

export const LabelRenderer: React.FC<LabelProps> = ({
  text,
  value,
  onSelect,
  onRemove,
  isSelected,
}) => {
  return (
    <div
      className={`w-fit px-2 flex items-center border rounded-full ${
        isSelected ? "border-green-400 text-green-400" : "border-gray-400"
      } ${onSelect && "cursor-pointer hover:bg-slate-100"}`}
      onClick={() => onSelect && onSelect(value)}
    >
      <span>{text}</span>
      {onRemove && (
        <XMarkIcon
          className="size-[14px] ml-1 cursor-pointer rounded-full hover:bg-red-400 hover:text-white"
          onClick={() => onRemove && onRemove(value)}
        />
      )}
    </div>
  );
};
