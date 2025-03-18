import { ReactNode, MouseEventHandler } from 'react';

interface TabButtonProps {
  children: ReactNode;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
}

export function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  return (
    <button
      className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " + (isSelected ? " bg-blue-700" : "")}
     
      onClick={onSelect}
    >
      {children}
    </button>
  );

}
