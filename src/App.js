import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  News,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  ErrorBoundary,
  Footer,
} from "./Components";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout style={{ minHeight: "82vh" }}>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
