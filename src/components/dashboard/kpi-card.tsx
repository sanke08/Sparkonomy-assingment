import { SectionBox } from "./section-box";

export const KPICards = () => {
    return (
        <div className=" grid grid-cols-2 gap-3">
            <SectionBox className=" col-span-2">
                <p className="text-sm text-[#999999] font-medium">Total Earning</p>
                <p className="text-xl font-bold mt-2 text-[#8134AF]">$1,25,000</p>
            </SectionBox>

            <SectionBox>
                <p className="text-sm text-[#999999] font-medium">Payment Awaited</p>
                <p className="font-semibold mt-2 text-[#8134AF]">$25,000</p>
            </SectionBox>

            <SectionBox>
                <p className="text-sm text-[#999999] font-medium">Payment Overdue</p>
                <p className="font-semibold mt-2 text-[#8134AF]">$25,000</p>
            </SectionBox>
        </div>
    );
};