// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Icon,
  useColorModeValue,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
// import React from "react";
import { IoDocumentsSharp } from "react-icons/io5";
import {
  FaPaypal,
  FaWallet,
  FaCube,
  FaPenFancy,
  FaCubes,
  FaDollarSign,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
  fishermanTableData,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import MemberTim from "./components/MemberTim";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";
import Header from "./components/Header";
import headerBg from "./components/headerBg.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import { fishermanTeamCatchData } from "variables/general";
import { fishermanTeamCatchDetail } from "variables/general";
import FishermanCatch from "../FinanceReport/components/FishermanCatch";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { URL_API } from "constant/data";
import axios from "axios";
import { fishermanTeamCatch } from "variables/general";
// import { fishermanTableData } from "variables/general";

function TimNelayan(props) {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetchData();
    console.log(fishermanTeamData);
    // console.log(fishermanTeamData[0].name);
  }, []);

  useEffect(() => {
    if (fishermanTeamData) {
      console.log(fishermanTeamData);
      // console.log(fishermanTeamData.name);
    }
  }, [fishermanTeamData]);

  const [fishermanTeamData, setFishermanTeamData] = useState(null);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: `application/json`,
      };

      const response = await axios.get(`${URL_API}/api/fisherman-tim/${id}`, {
        headers,
      });
      // console.log(response.data.data)
      setFishermanTeamData(response.data.data[0]);
      console.log(fishermanTeamData.name);

      // console.log(fishermanTeamData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Header
        backgroundHeader={headerBg}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={fishermanTeamData ? fishermanTeamData.name : `Tim Name`}
        location={
          fishermanTeamData ? fishermanTeamData.location : `Location Tim`
        }
        year_formed={
          fishermanTeamData ? fishermanTeamData.year_formed : `Year Formed`
        }
      />
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <SimpleGrid columns={4} spacing={10}>
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaWallet} />}
              title={"Balance"}
              description={"Belong interactive"}
              amount={fishermanTeamData ? fishermanTeamData.balance : `null`}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaCubes} />}
              title={"Quantity"}
              description={"Belong interactive"}
              amount={fishermanTeamData ? fishermanTeamData.quantity : `null`}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaCubes} />}
              title={"Total Asset"}
              description={"Belong interactive"}
              amount={
                fishermanTeamData ? fishermanTeamData.total_assets : `null`
              }
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Divident Yield"}
              description={"Freelance Payment"}
              amount={
                fishermanTeamData ? fishermanTeamData.divident_yield : `null`
              }
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Debt To Equity Ratio"}
              description={"Freelance Payment"}
              amount={
                fishermanTeamData
                  ? fishermanTeamData.debt_to_equity_ratio
                  : `null`
              }
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Market Cap"}
              description={"Freelance Payment"}
              amount={fishermanTeamData ? fishermanTeamData.market_cap : `null`}
            />
          </SimpleGrid>
        </Box>
        <Box>
          <MemberTim
            title={"Member"}
            data={
              fishermanTeamData
                ? fishermanTeamData.fisherman_data
                : fishermanTableData
            }
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid my={2} columns={2} spacing={5}>
        <FishermanCatch
          title={"Fisherman Catch Table"}
          textColor={"blue"}
          captions={["Tanggal Tangkapan", "Weight", "Actions"]}
          data={fishermanTeamCatch}
          fishcatchDetail={fishermanTeamCatchDetail}
        />
        <Transactions
          title={"Funding Transaction"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </SimpleGrid>

      {/* <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
            mb={4}
          >
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaWallet} />}
              title={"Balance"}
              description={"Belong interactive"}
              amount={fishermanTeamData ? (fishermanTeamData.balance) : (`null`)}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaCubes} />}
              title={"Quantity"}
              description={"Belong interactive"}
              amount={fishermanTeamData ? (fishermanTeamData.quantity) : (`null`)}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaCubes} />}
              title={"Total Asset"}
              description={"Belong interactive"}
              amount={fishermanTeamData ? (fishermanTeamData.total_assets) : (`null`)}
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Divident Yield"}
              description={"Freelance Payment"}
              amount={fishermanTeamData ? (fishermanTeamData.divident_yield) : (`null`)}
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Debt To Equity Ratio"}
              description={"Freelance Payment"}
              amount={fishermanTeamData ? (fishermanTeamData.debt_to_equity_ratio) : (`null`)}
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Market Cap"}
              description={"Freelance Payment"}
              amount={fishermanTeamData ? (fishermanTeamData.market_cap) : (`null`)}
            />
          </Grid>
          <FishermanCatch
            title={"Fisherman Catch Table"}
            textColor={"blue"}
            captions={["Tanggal Tangkapan", "Weight", "Actions"]}
            data={fishermanTeamCatch}
            fishcatchDetail={fishermanTeamCatchDetail}
          />
        </Box>
        <MemberTim title={"Member"} data={fishermanTeamData ? (fishermanTeamData.fisherman_data) : (fishermanTableData) } />
      </Grid>
         <Transactions
        title={"Funding Transaction"}
        date={"23 - 30 March"}
        newestTransactions={newestTransactions}
        olderTransactions={olderTransactions}
      />
      */}
    </Flex>
  );
}

export default TimNelayan;
