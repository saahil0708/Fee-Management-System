import React from 'react';
import { CustomButton } from '../Components/CustomButton';
import FeeProgressCard from '../Components/FeeProgressCard';
import Header from '../Components/Header';
import NotificationsTab from '../Components/NotificationTab';
import PaymentHistoryTab from '../Components/paymentHistoryTab';
import ProfileTab from '../Components/ProfileTab';
import QuickActionsCard from '../Components/QuickActionCard';
import QuickStats from '../Components/QuickStats';
import UpcomingEventsCard from '../Components/UpcomingEventsCard';
import WelcomeSection from '../Components/WelcomeSection';

const Home = () => {
  return (
    <>
      <Header />
      <WelcomeSection />
      <QuickStats />
      <FeeProgressCard />
      <QuickActionsCard />
      <NotificationsTab />
      <PaymentHistoryTab />
      <ProfileTab />
      <UpcomingEventsCard />
      <CustomButton />
    </>
  );
};

export default Home;
