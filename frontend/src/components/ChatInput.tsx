import { useLayoutEffect, useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {
  onSend: (value: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [hasInputValue, setHasInputValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (value: string) => {
    setHasInputValue(!!value);
  };

  const onEnter = () => {
    if (!hasInputValue) {
      return;
    }

    if (inputRef.current) {
      onSend?.(inputRef.current?.value);
      setHasInputValue(false);
      inputRef.current.value = "";
    }
  };

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative flex gap-2 p-2 border-t-1 border-gray-200">
      <Input
        ref={inputRef}
        placeholder="Write something"
        onChange={onChange}
        onEnter={onEnter}
      />
      <Button disabled={!hasInputValue} onClick={onEnter}>
        ➤
      </Button>
    </div>
  );
}
