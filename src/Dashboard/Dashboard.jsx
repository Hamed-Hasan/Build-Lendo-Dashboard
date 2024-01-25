import React from 'react';
import Layout from '../Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import AccountBalance from '../components/AccountBalance/AccountBalance';
import AutoInvestment from '../components/AutoInvestment/AutoInvestment';
import InvestmentDetails from '../components/InvestmentDetails/InvestmentDetails';
import RiskScoreDistribution from '../components/RiskScoreDistribution/RiskScoreDistribution';


const Dashboard = () => {
  return (
    <Layout sidebar={<Sidebar />}>
      <div>
        <Header />
        <AccountBalance />
        <AutoInvestment />
        <InvestmentDetails />
        <RiskScoreDistribution />
        {/* More components */}
      </div>
    </Layout>
  );
};

export default Dashboard;
