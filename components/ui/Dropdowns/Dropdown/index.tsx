import { DropdownProvider } from "./dropdown-components/Dropdown.provider";

import styles from "./dropdown-components/Dropdown.module.scss";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
};

const Dropdown = ({ children, className }: DropdownProps) => (
  <DropdownProvider>
    <div className={`${styles.dropdownWrapper} ${className}`}>{children}</div>
  </DropdownProvider>
);

export default Dropdown;
