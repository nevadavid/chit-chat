import { forwardRef, type ChangeEvent, type KeyboardEvent } from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onEnter?: (value: string) => void;
  onChange?: (value: string) => void;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, placeholder, onEnter, onChange }, ref) => {
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        onEnter?.(event.currentTarget.value);
      }
    };

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <input
        ref={ref}
        value={value}
        className="w-full px-4 py-2 rounded-2xl text-sm bg-gray-200"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChangeEvent}
      />
    );
  }
);

export default Input;
