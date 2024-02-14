import React from 'react'
import Login from '../Public/Login'
import VerifyOTP from '../Public/VerifyOTP'
import Search from '../Public/Search'
import Menu from '../Public/Menu'
import SellerDashboard from '../Private/Seller/SellerDashboard'
import SellerOrder from '../Private/Seller/SellerOrder'
import Cart from '../Private/Customer/Cart'
import Wishlist from '../Private/Customer/Wishlist'
import Order from '../Private/Customer/Order'
import EditProfile from '../Private/Common/EditProfile'
import Account from '../Private/Common/Account'
import Register from '../Public/Register'

const navs = [
    // public routes
    {
        "path" : "/seller/register",
        "element" : <Register role={"SELLER"}/> ,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },
    {
        "path" : "/customer/register",
        "element" : <Register role={"CUSTOMER"}/>,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },
    {
        "path" : "/login",
        "element" : <Login/>,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },
    {
        "path" : "/verify-otp",
        "element" : <VerifyOTP/>,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },
    {
        "path" : "/search",
        "element" : <Search/>,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },
    {
        "path" : "/menu",
        "element" : <Menu/>,
        "authenticationRequired" : false,
        "isVisibleAfterAuthentication" : false,
        "role" : "ALL"
    },

    // private seller routes
    {
        "path" : "/seller-dashboard",
        "element" : <SellerDashboard/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "SELLER"
    },
    {
        "path" : "/seller-order",
        "element" : <SellerOrder/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "SELLER"
    },

    // private customer routes
    {
        "path" : "/cart",
        "element" : <Cart/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "CUSTOMER"
    },
    {
        "path" : "/wishlist",
        "element" : <Wishlist/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "CUSTOMER"
    },
    {
        "path" : "/orders",
        "element" : <Order/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "CUSTOMER"
    },

    // private common routes
    {
        "path" : "/edit-profile",
        "element" : <EditProfile/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "ALL"
    },
    {
        "path" : "/account",
        "element" : <Account/>,
        "authenticationRequired" : true,
        "isVisibleAfterAuthentication" : true,
        "role" : "ALL"
    }

]

export default navs