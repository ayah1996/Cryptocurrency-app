import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Exchanges,
  News,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  ErrorBoundary,
  CustomFooter,
} from "./Components";

import "antd/dist/antd.css";
import "./App.css";
const { Footer, Sider, Content, Header } = Layout;

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0" className="sider">
            <Navbar />
          </Sider>
          <Layout>
            <Header className="header" />
            <Content className="content">
              <div className="routes">
                <Routes>
                  <Route path="/" key={1} element={<Homepage />} />
                  <Route path="/exchanges" key={2} element={<Exchanges />} />
                  <Route
                    path="/cryptocurrencies"
                    key={3}
                    element={<Cryptocurrencies />}
                  />
                  <Route
                    path="/crypto/:coinId"
                    key={4}
                    element={<CryptoDetails />}
                  />
                  <Route path="/news" key={5} element={<News />} />
                </Routes>
              </div>
            </Content>
            <Footer>
              <CustomFooter />
            </Footer>
          </Layout>
        </Layout>
      </div>
    </ErrorBoundary>
  );
}

export default App;
