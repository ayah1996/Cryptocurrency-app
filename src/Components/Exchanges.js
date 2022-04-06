import React, { useEffect, useState } from "react";
import {
  Avatar,
  Col,
  Collapse,
  Row,
  Select,
  Table,
  Tag,
  Typography,
} from "antd";
import {
  useGetCryptosQuery,
  useGetCryptoExchangesQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import millify from "millify";

const { Option } = Select;
const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
  const [coinId, setCoinId] = useState("Qwsogvtv82FCd");

  const { data } = useGetCryptosQuery(100);
  const { data: cryptoExchanges, isFetching } = useGetCryptoExchangesQuery({
    coinId,
  });
  const exchangesList = cryptoExchanges?.data?.exchanges;

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      exchanges: "Binance",
      volume: 5,
      markets: 297,
    },
  ]);

  useEffect(() => {
    if (!isFetching) {
      setDataSource(
        exchangesList.map((exchange) => ({
          key: exchange.uuid,
          exchanges: (
            <>
              <Row key={exchange.uuid} style={{ width: "100%" }}>
                <Col span={24}>
                  <Text>
                    <strong>{exchange.rank}.</strong>
                  </Text>
                  <Avatar className="exchange-image" src={exchange.iconUrl} />
                  <Text>
                    <strong>{exchange.name}</strong>
                  </Text>
                </Col>
              </Row>
            </>
          ),
          volume: millify(exchange["24hVolume"]),
          markets: millify(exchange.numberOfMarkets),
          recommended: (
            <Tag color={exchange.recommended ? "green" : "red"}>
              {exchange.recommended ? "recommended" : "not recommended"}
            </Tag>
          ),
        }))
      );
    }
  }, [exchangesList, isFetching]);

  const columns = [
    {
      title: "Exchanges",
      dataIndex: "exchanges",
      key: "exchanges",
    },
    {
      title: "24h Trade Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Markets",
      dataIndex: "markets",
      key: "markets",
    },
    {
      title: "Recommended",
      dataIndex: "recommended",
      key: "recommended",
    },
  ];

  if (isFetching) return <Loader />;

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Select
            showSearch
            className="select-exchanges"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => {
              setCoinId(value);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ marginBottom: "20px" }}
          >
            {data?.data?.coins.map((coin) => (
              <Option value={coin.uuid}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Exchanges;
