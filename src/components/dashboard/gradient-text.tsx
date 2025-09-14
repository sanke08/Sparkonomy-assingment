import { twMerge } from "tailwind-merge";


type GradientTextProps = {
    children: React.ReactNode;
    className?: string;
};

export const GradientText = ({ children, className }: GradientTextProps) => {
    return (
        <p
            className={twMerge(
                "bg-[linear-gradient(180deg,#DD2A7B_10%,#9747FF_50%,#334CCA_100%)] bg-clip-text text-transparent",
                className
            )}
        >
            {children}
        </p>
    );
};
