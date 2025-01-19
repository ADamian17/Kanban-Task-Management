import { useFocus } from "@/lib/hooks/useFocus";
import { ComponentRef, createContext, useContext, useState } from "react";

const SelectCtx = createContext<Select.Context>({} as Select.Context);

const SelectProvider: React.FC<Select.Provider> = ({ children, optionsCount, onChange }) => {
  const [tabIndex, setTabIndex] = useState(1);
  const [inputRef, setInputFocus] = useFocus<ComponentRef<"input">>();
  const [menuRef, _, setMenuBlur] = useFocus<HTMLMenuElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<Select.Context["inputValue"]>({
    value: "",
    label: "",
  });

  const handleSetInputValue = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedOption = JSON.parse(e.currentTarget.dataset["opt"] as string);
    setInputValue(selectedOption);

    if (typeof onChange === "function") {
      onChange(selectedOption);
    }

    if (isOpen) {
      setTabIndex(0);
      setIsOpen(false);
    }
  };

  const handleOpenList = () => {
    setTabIndex(0);
    setIsOpen(!isOpen);
  };

  const handleCloseList = (e: MouseEvent) => {
    if (e.target !== menuRef.current && e.target !== inputRef.current) {
      setIsOpen(false);
      setTabIndex(0);
    }
  };

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter" && !isOpen) {
      setTabIndex(0);
      setIsOpen(true);
      return;
    }

    if (e.key.toLowerCase() === "escape" && isOpen) {
      setTabIndex(0);
      setIsOpen(!isOpen);
      return;
    }

    if (e.key === "ArrowDown") {
      setMenuBlur();
      setTabIndex((prev) => prev + 1);
    }
  };

  const handleMenuKeyUp = (e: React.KeyboardEvent<HTMLMenuElement>) => {
    if (e.key.toLowerCase() === "escape" && isOpen) {
      setTabIndex(0);
      setIsOpen(!isOpen);
      return;
    }

    if (e.key.toLowerCase() === "enter" && isOpen) {
      const selectedOption = JSON.parse(document.activeElement?.getAttribute("data-opt") as string);
      setInputValue(selectedOption);

      if (typeof onChange === "function") {
        onChange(selectedOption);
      }

      setIsOpen(false);
      return;
    }

    if (e.key === "ArrowDown") {
      setTabIndex((prev) => {
        if (prev >= optionsCount) return prev;

        return prev + 1;
      });

      return;
    }

    if (e.key === "ArrowUp") {
      if (tabIndex === 1) {
        setInputFocus();
      }

      setTabIndex((prev) => {
        if (prev <= 0) return prev;

        return prev - 1;
      });

      return;
    }
  };

  const value = {
    handleCloseList,
    handleInputKeyUp,
    handleMenuKeyUp,
    handleOpenList,
    handleSetInputValue,
    inputRef,
    inputValue,
    isOpen,
    menuRef,
    setInputValue,
    tabIndex,
  };

  return <SelectCtx.Provider value={value}>{children}</SelectCtx.Provider>;
};

export const useSelectCtx = () => useContext(SelectCtx);
export default SelectProvider;
