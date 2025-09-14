
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    type ChartData,
    type ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { SectionBox } from "./section-box";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);




export const ChartComponent = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const incomeData = [3500, 4800, 6800, 3200, 5000, 500];
    const momGrowthData = [0, 40, 35, -50, 55, -95];

    const data: ChartData<"bar" | "line"> = {
        labels,
        datasets: [
            {
                label: "MoM Growth",
                data: momGrowthData,
                type: "line",
                borderColor: "rgb(127, 30, 29)",
                backgroundColor: "transparent",
                borderWidth: 2,
                pointRadius: 0,
                pointBackgroundColor: "rgb(127, 30, 29)",
                yAxisID: "y1",
            },
            {
                label: "Income",
                data: incomeData,
                backgroundColor: "rgb(167, 67, 239)",
                borderColor: "rgb(167, 67, 239)",
                borderRadius: 6,
                yAxisID: "y",
            },
        ],
    };

    const options: ChartOptions<"bar" | "line"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                type: "linear",
                position: "left",
                ticks: {
                    callback: (value) => "$" + Number(value) / 1000 + "k",
                    color: "#a0a0a0",
                },
                grid: {
                    drawOnChartArea: true,
                    color: "rgba(0, 0, 0, 0.05)",
                },
            },
            y1: {
                type: "linear",
                position: "right",
                ticks: {
                    callback: (value) => value + "%",
                    color: "#a0a0a0",
                },
                grid: {
                    drawOnChartArea: false,
                },
            },
            x: {
                ticks: { color: "#a0a0a0" },
                grid: { drawOnChartArea: false },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                    padding: 20,
                    color: "#555",
                },
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
    };

    return (
        <SectionBox>
            <h2 className="text-sm font-medium text-[#6B7280] mb-1">Income Trend</h2>
            <p className="text-sm text-[#999999] ">
                Your monthly income and growth for the last 6 months.
            </p>
            <div className="w-full h-64 mt-4 md:h-80 lg:h-[26rem]">
                <Chart
                    key="income-trend"
                    type="bar"
                    data={data}
                    options={options}
                />
            </div>
        </SectionBox>
    );
};