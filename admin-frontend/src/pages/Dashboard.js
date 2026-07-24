import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background: #f5f5f5;
`;

const Main = styled.main`
  padding: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
`;
const Stats = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const StatCard = styled.div`
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 8px;
`;

function Dashboard() {
  return (
    <Layout>
      <Sidebar />

      <Content>
        <Header />

        <Main>
          <Card>
            <h1>Dashboard</h1>
            <Stats>
              <StatCard>
                <h2>Total Pages</h2>
                <p>0</p>
              </StatCard>

              <StatCard>
                <h2>Published</h2>
                <p>0</p>
              </StatCard>

              <StatCard>
                <h2>Drafts</h2>
                <p>0</p>
              </StatCard>
            </Stats>
            <p>Welcome to the CMS Admin Panel.</p>
          </Card>
        </Main>
      </Content>
    </Layout>
  );
}

export default Dashboard;
