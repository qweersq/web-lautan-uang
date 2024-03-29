// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Success Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const fishermanTeamTableData = [
  {
    name: "Tim Kerapu Biru",
    phone: "0878787878787",
    year_formed: "2010",
    address: "Jl Pelabuhan No 10",
    balance: "0878787878787",
    location_id: "1",
    quantity: "100",
    total_assets: "1",
    divident_yield: "1",
    debt_to_equity_ration: "1",
    market_cap: "100000",
  },
  {
    name: "Tim Kerapu Merah",
    phone: "0878787878787",
    year_formed: "2010",
    address: "Jl Pelabuhan No 10",
    balance: "0878787878787",
    location_id: "1",
    quantity: "100",
    total_assets: "1",
    divident_yield: "1",
    debt_to_equity_ration: "1",
    market_cap: "100000",
  },
];

export const investorData = [
  {
    id: 0,
    name: "Selly",
    phone: "0824546515",
    email: "Sely@mail.com",
    password: "12345",
    birth_date: "01-02-2001",
    address: "Jl Solo Selatan No 10",
    gender: "female",
    location_id: "Malang Selatan",
    nik: "1231124422",
    npwp: "084541212",
    identity_photo: avatar1,
    bank_id: 1,
    register_date: "05-08-2022",
    balance: "NULL",
  },
  {
    id: 1,
    name: "Niki",
    phone: "0811241229",
    email: "niki@mail.com",
    password: "12345",
    birth_date: "12-06-1998",
    address: "Jl Candi Timur Gg 4",
    gender: "female",
    location_id: "Malang Barat",
    nik: "08552323",
    npwp: "08417281",
    identity_photo: avatar3,
    bank_id: 1,
    register_date: "07-12-2023",
    balance: "NULL",
  },
  {
    id: 2,
    name: "Angle",
    phone: "0845522321",
    email: "Angle@mail.com",
    password: "12345",
    birth_date: "01-11-2023",
    address: "Jl Pelabuhan No 10",
    gender: "female",
    location_id: "Kota Bontang",
    nik: "3466721124",
    npwp: "0824412252",
    identity_photo: avatar1,
    bank_id: 1,
    register_date: "16-01-2023",
    balance: "NULL",
  },
  {
    id: 3,
    name: "Aldo",
    phone: "081234131",
    email: "Aldo@mail.com",
    address: "Jl Pelabuhan No 10",
    password: "12345",
    birth_date: "01-02-2001",
    gender: "male",
    location_id: "Pasuruan",
    nik: "123123123",
    npwp: "0851244122",
    identity_photo: avatar2,
    bank_id: 1,
    register_date: "10-06-2023",
    balance: "NULL",
  },
];

export const fishermanTeamCatchData = fishermanTeamTableData.map((team) => {
  return {
    ...team,
    name: team.name,
    weight: `${team.name.length}`,
  };
});

export const fishermanTeamCatch = [
  {
    id: 1,
    date: "25/02/2023",
    weight: "90 kg",
  },
  {
    id: 2,
    date: "28/02/2023",
    weight: "90 kg",
  },
  {
    id: 3,
    date: "11/03/2019",
    weight: "90 kg",
  },
  {
    id: 3,
    date: "11/03/2019",
    weight: "90 kg",
  },
];

export const animalTypeData = [
  {
    id: 0,
    animal_type: "Ikan Tongkol",
    description:
      "Ikan tongkol adalah jenis ikan bersisik yang dapat ditemukan di perairan air tawar dan laut. Mereka memiliki tubuh yang ramping dan cepat berenang. Ikan tongkol sering menjadi target para pemancing karena dagingnya yang lezat dan bergizi tinggi.",
  },
  {
    id: 1,
    animal_type: "Ikan Ekor Kuning",
    description:
      "Ikan ekor kuning adalah jenis ikan laut yang terkenal dengan warna ekornya yang berwarna kuning cerah. Mereka biasanya ditemukan di perairan tropis dan subtropis. Ikan ekor kuning memiliki ukuran yang kecil hingga sedang dan sering menjadi sasaran para pemancing hobi karena pertarungannya yang seru dan keindahan warnanya.",
  },
  {
    id: 2,
    animal_type: "Ikan Sayap Merah",
    description:
      "Ikan sayap merah adalah kelompok ikan dengan beragam bentuk dan ukuran yang dapat ditemukan di berbagai perairan. Mereka memiliki tubuh yang pipih dan sering dikenal karena warna merah cerah pada sirip dan tubuhnya.",
  },
  {
    id: 3,
    animal_type: "Sejening Ikan",
    description:
      "Sejening ikan adalah jenis ikan yang belum terlalu dikenal secara luas. Mereka memiliki ciri khas yaitu tubuh yang ramping dan panjang dengan sisik yang berkilau. Sejening ikan umumnya ditemukan di perairan tropis dengan suhu yang hangat.",
  },
  {
    id: 4,
    animal_type: "Kuda Laut",
    description:
      "Kuda laut adalah jenis ikan kecil yang memiliki tubuh yang panjang dan ramping dengan kepala yang mirip dengan kepala kuda. Mereka memiliki kemampuan unik untuk berenang secara vertikal dan bersembunyi di antara rumput laut dengan bantuan perlekatan pada ekor mereka. ",
  },
];

export const fishermanTeamCatchDetail = [
  {
    id: 0,
    name: "Ikan Tongkol",
    animal_type: "Ikan bersisik",
    fishing_catch_id: 1,
    price: 14.0,
    weight: "25 kg",
  },
  {
    id: 1,
    name: "Ikan Sayap Merah",
    animal_type: "Ikan bersisik",
    fishing_catch_id: 2,
    price: 10.0,
    weight: "14 kg",
  },
  {
    id: 2,
    name: "Ikan Ekor Kuning",
    animal_type: "Ikan bersisik",
    fishing_catch_id: 3,
    price: 12.0,
    weight: "11 kg",
  },
];

export const fishermanTeamMostCatch = [
  {
    id: 0,
    name: "Team Kerapu Biru",
    weight: "50 kg",
  },
  {
    id: 1,
    name: "Team Nelayan Bontang Kuala Jaya",
    weight: "43 kg",
  },
  {
    id: 2,
    name: "Team Kerapu Biru",
    weight: "39 kg",
  },
];

export const fishermanTableData = [
  {
    tim_id: "Tim Kerapu Biru",
    name: "Zilong",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Member",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
  {
    tim_id: "Tim Kerapu Biru",
    name: "Andre",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Leader",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
  {
    tim_id: "Tim Kerapu Biru",
    name: "Andre",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Leader",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
  {
    tim_id: "Tim Kerapu Biru",
    name: "Andre",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Leader",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
  {
    tim_id: "Tim Kerapu Biru",
    name: "Andre",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Leader",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
  {
    tim_id: "Tim Kerapu Biru",
    name: "Andre",
    phone: "0875444112684",
    email: "zilong@gmail.com",
    password: "zilong123",
    gender: "Male",
    birth_date: "1990-01-01",
    address: "Jalan Kalpataru",
    role: "Leader",
    location_id: "Malang Selatan",
    status: "Active",
    experience: 3,
    nik: 12345919,
    photo: avatar2,
    identity_photo: avatar2,
  },
];

export const LocationData = [
  {
    id: 1,
    country_name: "Indonesia",
    province_name: "Jawa Timur",
    kota_kab_name: "Malang",
    kecamatan_name: "Sitiarjo",
    kelurahan_des_name: "NULL",
    postal_code: 1234,
  },
  {
    id: 2,
    country_name: "Indonesia",
    province_name: "Jawa Timur",
    kota_kab_name: "Malang",
    kecamatan_name: "Sitiarjo",
    kelurahan_des_name: "NULL",
    postal_code: 1234,
  },
  {
    id: 3,
    country_name: "Indonesia",
    province_name: "Jawa Timur",
    kota_kab_name: "Malang",
    kecamatan_name: "Sitiarjo",
    kelurahan_des_name: "NULL",
    postal_code: 1234,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Joko",
    email: "joko@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Success",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Susilo susanto",
    email: "susilo@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Failed",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Megawati S",
    email: "megawati@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Success",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Prabowo",
    email: "prabowo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Success",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Baswedan",
    email: "anies@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Failed",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Failed",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Tara Basro",
    date: "27 March 2021, at 12:30 PM",
    price: "+ Rp500.000",
    logo: FaArrowUp,
  },
  {
    name: "Joko",
    date: "27 March 2021, at 12:30 PM",
    price: "+ Rp300.000",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Andre Kalusta",
    date: "26 March 2021, at 13:45 PM",
    price: "+ Rp50.000",
    logo: FaArrowUp,
  },
  {
    name: "Benny",
    date: "26 March 2021, at 12:30 PM",
    price: "+ Rp150.000",
    logo: FaArrowUp,
  },
  {
    name: "Saka",
    date: "26 March 2021, at 12:30 PM",
    price: "+ Rp500.000",
    logo: FaArrowUp,
  },
];
