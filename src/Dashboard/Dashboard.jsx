import React from 'react';
import Layout from '../Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import AutoInvestment from '../components/AutoInvestment/AutoInvestment';
import InvestmentDetails from '../components/InvestmentDetails/InvestmentDetails';
import RiskScoreDistribution from '../components/RiskScoreDistribution/RiskScoreDistribution';
import StrategySection from '../components/AccountBalance/StrategySection';

const componentsToRender = [
  <Header key="header" />,
  <AutoInvestment key="autoInvestment" />,
  <StrategySection key="strategySection" />,
  <InvestmentDetails key="investmentDetails1" />,
  <InvestmentDetails key="investmentDetails2" />,
  <RiskScoreDistribution key="riskScoreDistribution" />,
];

const Dashboard = () => {
  return (
    <Layout sidebar={<Sidebar />}>
      <div>
        {componentsToRender.map(component => (
          component
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
