import { GradientText } from "./gradient-text";
import { Pills } from "./pills";
import { SectionBox } from "./section-box";



export const Filter = () => {
    return (
        <SectionBox className="space-y-3">
            <div className=" flex justify-between items-center text-[#999]">
                <p className=" font-medium text-sm">Time Period</p>
                <p className=" text-xs">dd:mm:yyyy - dd:mm:yyyy</p>
            </div>
            <div className=" flex gap-2 flex-wrap">
                <Pills type="border" className=" font-normal">
                    1 Month
                </Pills>
                <Pills
                    type="neutral"
                    className="border border-[#F3E8FF]  bg-[#8134AF]/5 font-normal"
                >
                    <GradientText>3Months</GradientText>
                </Pills>
                <Pills
                    type="border"
                    className=" font-normal"
                    rightIcon={
                        <img
                            src="/crown.svg"
                            className="min-h-3.5 min-w-3.5 max-h-3.5 max-w-3.5"
                        />
                    }
                >
                    1 Year
                </Pills>
                <Pills
                    type="border"
                    className=" font-normal"
                    leftIcon={
                        <img
                            src="/calender.svg"
                            className="min-h-3.5 min-w-3.5 max-h-3.5 max-w-3.5"
                        />
                    }
                >
                    Custom
                </Pills>
            </div>
        </SectionBox>
    );
};
