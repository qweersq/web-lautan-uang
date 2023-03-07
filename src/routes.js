// import
import Dashboard from "views/Dashboard/Dashboard";
import Nelayan from "views/Dashboard/Nelayan";
import NelayanTim from "views/Dashboard/TimNelayan";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import TransactionPage from "views/Dashboard/Transaction";
import FinanceReport from "views/Dashboard/FinanceReport";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Transaction",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/transaction",
        name: "Transaction",
        icon: <StatsIcon color="inherit" />,
        component: TransactionPage,
        layout: "/admin",
      },
    ],
  },
  {
    name: "Nelayan",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/tim-nelayan",
        name: "Tim Nelayan",
        icon: <StatsIcon color="inherit" />,
        component: Nelayan,
        layout: "/admin",
      },
     
    ],
  },
  {
    path: "/nelayan-tim/report",
    name: "Laporan Financial",
    icon: <CreditIcon color="inherit" />,
    component: FinanceReport,
    layout: "/admin",
  },
  
  
  {
    name: "Investor",
    category: "account",
    views: [
      {
        path: "/profile",
        name: "Investor",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
    hidden: true,
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
    hidden: true,

  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
    component: SignUp,
    layout: "/auth",
    hidden: true,

  },
 
];
export default dashRoutes;
