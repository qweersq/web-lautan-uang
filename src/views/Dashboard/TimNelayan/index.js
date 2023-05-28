// Chakra imports
import { Box, Flex, Grid, Icon, useColorModeValue } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
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
// import { fishermanTableData } from "variables/general";
function TimNelayan() {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Header
        backgroundHeader={headerBg}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Tim Ikan Hiu"}
        location={"Malang"}
      />
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
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
              title={"Saldo"}
              description={"Belong interactive"}
              amount={2000}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaCubes} />}
              title={"Total Asset"}
              description={"Belong interactive"}
              amount={2000}
            />
            <PaymentStatistics
              icon={
                <Icon h={"24px"} w={"24px"} color="white" as={FaDollarSign} />
              }
              title={"Divident Yield"}
              description={"Freelance Payment"}
              amount={4550}
            />
            
          </Grid>
          <FishermanCatch
          title={"Fisherman Catch Table"}
          textColor={"blue"}
          captions={["Fisherman Team Name", "Weight", "Actions"]}
          data={fishermanTeamCatchData}
          fishcatchDetail={fishermanTeamCatchDetail}
        />
        </Box>
        <MemberTim title={"Member"} data={fishermanTableData} />
      </Grid>
        <Transactions
          title={"Fisherman Team Transactions"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
    </Flex>
  );
}

export default TimNelayan;
