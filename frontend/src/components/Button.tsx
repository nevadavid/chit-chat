import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ disabled = false, children, onClick }: Props) {
  return (
    <button
      className="p-2 font-bold not-disabled:cursor-pointer disabled:text-gray-400"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
