
type SectionBoxProps = {
    children: React.ReactNode;
    className?: string;
};

export const SectionBox = ({ children, className }: SectionBoxProps) => {
    return (
        <div
            className={`border-2 border-[#F2F2F2] px-3 py-4 rounded-2xl ${className}`}
        >
            {children}
        </div>
    );
};
