import { DropdownProvider } from "./dropdown-components/Dropdown.provider"
import DropdownButton from "./dropdown-components/Dropdown.button"
import DropdownMenu from "./dropdown-components/Dropdown.menu"

import styles from "./dropdown-components/Dropdown.module.scss"

type DropdownProps = {
  children: React.ReactNode
  className?: string
}

const Dropdown = ({ children, className }: DropdownProps) => (
  <DropdownProvider>
    <div className={`${styles.dropdownWrapper} ${className}`}>
      {children}
    </div>
  </DropdownProvider>
)

Dropdown.Button = DropdownButton
Dropdown.Menu = DropdownMenu

export default Dropdown;