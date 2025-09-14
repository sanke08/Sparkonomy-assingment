import { GradientText } from "./gradient-text";

export const NewInvoice = () => {
    return (
        <div className="p-6 text-center flex flex-col gap-2 items-center justify-center bg-gray-200/40 rounded-3xl">
            <img src="/plus-circle.svg" className=" h-12 w-12 object-contain" />
            <GradientText className="text-2xl font-semibold">
                Create New Invoice
            </GradientText>
            <p className="text-xs text-[#999999]">
                Start by creating and sending new invoice
            </p>
        </div>
    );
};
