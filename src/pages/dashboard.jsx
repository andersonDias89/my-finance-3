import { AccountsIndicator } from "../components/Dashboard/AccountsIndicator";
import { DepositIndicator } from "../components/Dashboard/DepositIndicator";
import { Indicators } from "../components/Dashboard/Indicators";
import { Header } from "../components/Header";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className="w-11/12 m-auto pt-5  ">
                <Indicators />
            </div>
            <div className="space-y-5 py-5">
                <div className="w-11/12 m-auto flex space-x-5">
                    <DepositIndicator />
                    <AccountsIndicator />
                </div>

            </div>
        </>
    )
}