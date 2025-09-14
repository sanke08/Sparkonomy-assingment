import { twMerge } from "tailwind-merge";




const typeStyles: Record<string, string> = {
    danger: "bg-[#FF2D55]/30 text-[#FF2D55]",
    success: "bg-[#34C759]/30 text-[#34C759]",
    warning: "bg-[#FFCC00]/15 text-[#FFCC00]",
    neutral: "bg-[#999999]/15 text-[#999999]",
    border: "border border-[#eaeaea] text-[#999999]",
    action: "bg-[#8134AF] text-white",
};

type PillsProps = {
    children: React.ReactNode;
    type?: keyof typeof typeStyles;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
};

export const Pills = ({
    children,
    type = "neutral",
    leftIcon,
    rightIcon,
    className,
}: PillsProps) => {
    return (
        <div
            className={twMerge(
                `rounded-full py-2 px-4 flex items-center gap-x-2 font-medium text-xs`,
                typeStyles[type],
                className
            )}
        >
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
        </div>
    );
};