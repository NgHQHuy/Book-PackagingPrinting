import React from "react";

interface LabelProps {
  id?: string;
  text: string;
  width?: number;
  height?: number;
  selectable: boolean;
  onClose?: () => void;
}

export const LabelUnit: React.FC<LabelProps> = ({ text }: LabelProps) => {
  return <span>{text}</span>;
};
