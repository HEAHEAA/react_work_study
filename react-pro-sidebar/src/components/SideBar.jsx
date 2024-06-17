import {Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {useState} from "react";
import { Link } from 'react-router-dom';


export const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        if(isCollapsed === true) {
            return setIsCollapsed(false);
        }else {
            return setIsCollapsed(true);
        }
    }
    return(
        <div>
            <div className="side-bar">
                <div className="side-bar-inner">
                    <Sidebar className="app" collapsed={isCollapsed}
                             breakPoint="sx"
                             rootStyles={{
                                 color: 'black',
                                 fontSize: 16,
                                 border: 'none',
                                 // position: 'fixed', //position : 'fixed' 넣어야 안움직임
                                 position: "sticky",
                                 top: 0,
                                 // overflow: 'hidden',
                                 height: '100vh',
                                 backgroundColor: "transparent opacity : 1",
                                 // overflowY: "visible",
                             }}
                    >
                        <Menu >
                            <MenuItem className="menu1"
                                      icon={<MenuRoundedIcon onClick={handleToggle}/>}
                                      component={<Link to="/"/>}
                            >
                                <h2> LOGO</h2>
                            </MenuItem>
                            <MenuItem icon={<GridViewRoundedIcon/>}> Dashboard </MenuItem>
                            <MenuItem icon={<ReceiptRoundedIcon/>}> Invoices </MenuItem>
                            <SubMenu label="Charts" icon={<BarChartRoundedIcon/>}>
                                <MenuItem icon={<TimelineRoundedIcon/>}> Timeline Chart </MenuItem>
                                <MenuItem icon={<BubbleChartRoundedIcon/>}>Bubble Chart</MenuItem>
                            </SubMenu>
                            <SubMenu label="Wallets" icon={<WalletRoundedIcon/>}>
                                <MenuItem icon={<AccountBalanceRoundedIcon/>}>
                                    Current Wallet
                                </MenuItem>
                                <MenuItem icon={<SavingsRoundedIcon/>}>Savings Wallet</MenuItem>
                            </SubMenu>
                            <MenuItem icon={<MonetizationOnRoundedIcon/>}>Transactions</MenuItem>
                            <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon/>}>
                                <MenuItem icon={<AccountCircleRoundedIcon/>}> Account </MenuItem>
                                <MenuItem icon={<ShieldRoundedIcon/>}> Privacy </MenuItem>
                                <MenuItem icon={<NotificationsRoundedIcon/>}>
                                    Notifications
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<LogoutRoundedIcon/>}> Logout </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div className="container">
                    <header>React Side-Bar</header>
                    <section className="section">dddd</section>
                </div>
            </div>


        </div>

    )
}
