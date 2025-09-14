import { Header } from "../header";
import { ChartComponent } from "./chart-component";
import { Filter } from "./filters";
import { Invoices } from "./invoices";
import { KPICards } from "./kpi-card";
import { NewInvoice } from "./new-invoice";

const Dashboard = () => {
    return (
        <div className="min-h-screen text-gray-800 font-inter bg-[#e7cde7]">
            <Header />

            <div className=" bg-white rounded-t-4xl overflow-hidden p-4 px-3 space-y-4">
                <div className=" flex flex-col lg:flex-row gap-3 lg:max-w-6xl md:max-w-lg mx-auto lg:px-4 xl:px-0">
                    <div className=" flex flex-col lg:justify-between gap-3 lg:w-[40%] w-full mx-auto">
                        <NewInvoice />
                        <p className=" text-xs text-center py-2 lg:py-0 text-[#8134AF]">
                            OR Upload an existing invoice and set payment reminder
                        </p>
                        <Filter />
                        <KPICards />
                    </div>
                    <div className=" lg:w-[60%] w-full mx-auto ">
                        <ChartComponent />
                    </div>
                </div>

                <Invoices />
                <div className="mt-24">
                    <img src="/sparkonomy.svg" className=" h-3.5 object-contain mx-auto" />
                    <p className=" text-[#999] text-[10px] text-center">
                        sparking the creator economy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;