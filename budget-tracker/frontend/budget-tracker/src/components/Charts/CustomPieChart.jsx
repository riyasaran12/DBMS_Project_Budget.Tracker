import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";
  import CustomTooltip from "./CustomToolTip";
  import CustomLegend from "./CustomLegend";
  
  const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor,
  }) => {
    return (
      <div className="relative w-full h-[380px]">
        {/* Overlay center text manually */}
        {showTextAnchor && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -top-3">
            <p className="text-gray-500 text-lg font-medium">{label}</p>
            <p className="text-black text-2xl">
              ₹{totalAmount.replace("₹", "").replace("$", "")}
            </p>
          </div>
        )}
  
        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
            >
            {Array.isArray(data) &&
                data.map((entry, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                />
            ))}
        </Pie>

  
            <Tooltip content={CustomTooltip} />
            <Legend content={CustomLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default CustomPieChart;
  