import Dashbord from "../components/Dashboard"
import AddAccountManager from "../components/addAccountManager"
import DisplayUser from "../components/DisplayUser"
import Revenue from "../components/Revenue/Revenue"
import CouponCode from "../components/Coupon/Couponcode"
import AddUser from "../components/AddUser/index"
import Userinfo from "../components/Userinfo/Userinfo";
// import SVNDemo from "../components/ExportSVN/UserSVNExport"

export const navbar = [
    {
        path:"/",
        title:"Home",
        element: Dashbord
    },
    {
        path: "/addAccountManager",
        title: "AddAccountManager",
        element: AddAccountManager
    },
    {
        path: "/displayUser",
        title: "Users",
        element: DisplayUser
    },
    {
        path:"/showRevenue",
        title: "Revenue",
        element : Revenue
    },
    {
        path:"/couponCode",
        title: "Coupon codes",
        element: CouponCode
    },
    {
        path: "/addUser",
        title: "Add User",
        element: AddUser
    },
    {
        path: "/userInfo",
        title: "User",
        element: Userinfo
    }
        // ,
    // {
    //     path: "/exportSVN",
    //     title: "UserSVN",
    //     element: SVNDemo
    // }
]