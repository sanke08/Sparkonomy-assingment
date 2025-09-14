import { Pills } from "./pills";
import { SectionBox } from "./section-box";

export const Invoices = () => {
    return (
        <div className="lg:px-4 xl:px-0 lg:max-w-6xl md:max-w-lg mx-auto space-y-3">
            <h2 className="font-semibold text-[#999]">Your Invoices</h2>
            <div className="space-y-4">
                {invoices.map((invoice, index) => (
                    <SectionBox
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium text-[#6B7280]">{invoice.title}</p>
                            <p className="text-xs text-[#999999]">
                                {invoice.amount}, Due: {invoice.due}
                            </p>
                        </div>
                        <div className=" flex items-center gap-3">
                            <Pills
                                type={invoice.status}
                                rightIcon={
                                    invoice.status === "action" ? (
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.90375 5.20185L0.5 0.798096H9.3075L4.90375 5.20185Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : null
                                }
                            >
                                {invoice.label}
                            </Pills>
                            {invoice?.icon ? icons[invoice.icon] : null}
                        </div>
                    </SectionBox>
                ))}
            </div>
        </div>
    );
};


// -------- Mock Data ---------
type InvoiceStatus =
    | "action"
    | "neutral"
    | "danger"
    | "success"
    | "warning";

type Invoice = {
    title: string;
    amount: string;
    due: string;
    status: InvoiceStatus;
    label: string;
    icon?: "notification" | "edit";
};

const invoices: Invoice[] = [
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "action",
        label: "Update Status",
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "neutral",
        label: "Unpaid",
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "danger",
        label: "Disputed",
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "success",
        label: "Paid",
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "warning",
        label: "Partially Paid",
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "danger",
        label: "Overdue",
        icon: "notification"
    },
    {
        title: "Income Trend",
        amount: "₹1,25,000",
        due: "2024-06-15",
        status: "danger",
        label: "Overdue",
        icon: "edit"
    },
];


const icons = {
    notification: <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16.7884V15.2887H1.80775V7.82693C1.80775 6.4821 2.22283 5.29301 3.053 4.25968C3.883 3.22635 4.94867 2.56543 6.25 2.27693V1.65393C6.25 1.30676 6.37142 1.0116 6.61425 0.768431C6.85708 0.525431 7.15192 0.403931 7.49875 0.403931C7.84575 0.403931 8.141 0.525431 8.3845 0.768431C8.62817 1.0116 8.75 1.30676 8.75 1.65393V2.27693C10.0513 2.56543 11.117 3.22635 11.947 4.25968C12.7772 5.29301 13.1923 6.4821 13.1923 7.82693V15.2887H15V16.7884H0ZM7.49825 19.5962C7.00075 19.5962 6.57542 19.4192 6.22225 19.0652C5.86892 18.7112 5.69225 18.2856 5.69225 17.7884H9.30775C9.30775 18.2873 9.13058 18.7133 8.77625 19.0664C8.42192 19.4196 7.99592 19.5962 7.49825 19.5962ZM3.30775 15.2887H11.6923V7.82693C11.6923 6.66926 11.283 5.68118 10.4645 4.86268C9.64583 4.04401 8.65767 3.63468 7.5 3.63468C6.34233 3.63468 5.35417 4.04401 4.5355 4.86268C3.717 5.68118 3.30775 6.66926 3.30775 7.82693V15.2887Z" fill="#999999" />
    </svg>,
    edit: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.16602 13.8337H3.21727L11.7477 5.30324L10.6964 4.25199L2.16602 12.7824V13.8337ZM0.916016 15.0837V12.2632L11.9081 1.27595C12.0341 1.16151 12.1732 1.0731 12.3254 1.01074C12.4778 0.948242 12.6375 0.916992 12.8046 0.916992C12.9716 0.916992 13.1334 0.946645 13.29 1.00595C13.4466 1.06526 13.5853 1.15956 13.706 1.28887L14.7237 2.31928C14.853 2.43998 14.9452 2.57887 15.0002 2.73595C15.0552 2.89303 15.0827 3.05012 15.0827 3.2072C15.0827 3.37484 15.0541 3.53477 14.9969 3.68699C14.9396 3.83935 14.8486 3.97852 14.7237 4.10449L3.73643 15.0837H0.916016ZM11.2129 4.78678L10.6964 4.25199L11.7477 5.30324L11.2129 4.78678Z" fill="#999999" />
    </svg>

}