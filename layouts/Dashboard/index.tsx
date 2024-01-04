import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MobileSelectBoard = dynamic(() => import('@/components/MobileSelectBoard'), { ssr: false });

import { getBoards } from '@/utils/getBoards';
import Button from '@/components/UI/Button'
import DashboardSidebar from '../DashboardSidebar';
import SidebarDesktopToggleButton from '@/components/SidebarDesktopToggleButton';

import styles from "./Dashboard.module.scss";
import BoardsMenu from '@/components/BoardsMenu';
import DashboardHeader from '../DashboardHeader';

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