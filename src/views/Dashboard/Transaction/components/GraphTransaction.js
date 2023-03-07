import { Heading, Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import BarChart from "components/Charts/BarChart";
import Chart from "react-apexcharts";
const GraphTransaction = ({ title, list, data }) => {
  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: list,
    },
  };

  const series = [
    {
      name: "Transaction",
      data: data,
    },
  ];

  return (
    <Card width="100%">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody align="left">
        <div style={{ width: "100%" }}>
          <Chart
            type="line"
            width="100%"
            options={options}
            series={series}
          />
        </div>
      </CardBody>
    </Card>

  );
};

export default GraphTransaction;
