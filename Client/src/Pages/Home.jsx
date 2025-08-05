import React from 'react';
// import { CustomButton } from '../Components/CustomButton';
import FeeProgressCard from '../Components/FeeProgressCard';
import Header from '../Components/Header';
import NotificationsTab from '../Components/NotificationTab';
import PaymentHistoryTab from '../Components/paymentHistoryTab';
import ProfileTab from '../Components/ProfileTab';
import QuickActionsCard from '../Components/QuickActionCard';
import QuickStats from '../Components/QuickStats';
import UpcomingEventsCard from '../Components/UpcomingEventsCard';
import WelcomeSection from '../Components/WelcomeSection';
// import EditProfile from '../components/Editprofile';
import PaymentDashboard from '../Components/Payment-dashboard'
// import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <QuickStats />
      <FeeProgressCard />
      {/* <QuickActionsCard /> */}
      <NotificationsTab />
      <PaymentHistoryTab />
      <ProfileTab />
      <UpcomingEventsCard />
      {/* <Footer/> */}

      {/* <EditProfile/> */}
      {/* <PaymentDashboard/> */}
      {/* <CustomButton /> */}
    </>
  );
};

export default Home;
