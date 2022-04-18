import React from "react";
import { Link } from "react-router-dom";

import millify from "millify";

import { Typography, Row, Col, Statistic, Card } from "antd";

import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  const valueStyle = { color: "#1890ff" };

  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={3} className="heading">
        Global Crypto State
      </Title>
      <Row gutter={[16, 16]}>
        <Col flex={1}>
          <Card bordered={false}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
              valueStyle={valueStyle}
            />
          </Card>
        </Col>
        <Col flex={1}>
          <Card bordered={false}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
              valueStyle={valueStyle}
            />
          </Card>
        </Col>
        <Col flex={1}>
          <Card bordered={false}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
              valueStyle={valueStyle}
            />
          </Card>
        </Col>
        <Col flex={1}>
          <Card bordered={false}>
            <Statistic
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
              valueStyle={valueStyle}
            />
          </Card>
        </Col>
        <Col flex={1}>
          <Card bordered={false}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
              valueStyle={valueStyle}
            />
          </Card>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={5} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
