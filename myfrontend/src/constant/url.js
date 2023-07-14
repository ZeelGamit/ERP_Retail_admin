import { AddAcManager, AddBusiness, Dashboard, GetAllAcManagers, GetAllBusinesses, GetAllCoupons, GetBusiness, Revenue } from "../components"

export const navbar = [
    {
        path:"/dash",
        title:"Home",
        element: Dashboard
    },
    {
        path:"businesses/addnew",
        title:"Add new user",
        element: AddBusiness
    },
    {
        path:"businesses/getallbusinesses",
        title:"Users",
        element: GetAllBusinesses
    },
    // {
    //     path:"businesses/revenue",
    //     title:"Business",
    //     element: Revenue
    // },
    {
        path:"acmanagers/addnew",
        title:"Account Managers",
        element: AddAcManager
    },
    {
        path:"acmanagers/getallacmanagers",
        title:"Account Managers",
        element: GetAllAcManagers
    },
    {
        path:"coupons/getallcoupons",
        title:"Coupons",
        element: GetAllCoupons
    },
    {
        path:"businesses/getbusiness",
        title:"Business",
        element: GetBusiness
    },
]