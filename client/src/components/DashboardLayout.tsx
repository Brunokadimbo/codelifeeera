import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import WelcomeCard from './WelcomeCard';
import OverviewCards from './OverviewCards';
import BrainActivityChart from './BrainActivityChart';
import EngineSlots from './EngineSlots';
import styles from './DashboardLayout.module.css';

/**
 * DashboardLayout Component
 * Main layout component that integrates all dashboard sections:
 * - TopNavbar
 * - Sidebar
 * - Main content area with WelcomeCard, OverviewCards, BrainActivityChart, EngineSlots
 * - Footer
 * Props: None
 */
export default function DashboardLayout() {
  return (
    <div className={styles.dashboardLayout}>
      <TopNavbar />
      <Sidebar />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <WelcomeCard />
          <OverviewCards />
          <BrainActivityChart />
          <EngineSlots />
        </div>
      </main>

      <Footer />
    </div>
  );
}
