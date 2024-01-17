import BoardsMenu from '@/components/BoardsMenu';
import DashboardSidebar from '../DashboardSidebar';
import SidebarDesktopToggleButton from '@/components/SidebarDesktopToggleButton';

import styles from "./Dashboard.module.scss";


type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => (
  <main className={styles.dashboard}>
    <DashboardSidebar>
      <BoardsMenu />
    </DashboardSidebar>

    {children}
    <SidebarDesktopToggleButton />
  </main>
)

export default DashboardLayout
