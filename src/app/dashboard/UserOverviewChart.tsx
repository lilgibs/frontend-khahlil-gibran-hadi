import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'


type TProps = {
  data: { name: string, value: number }[]
}

const COLORS = ["#81B622", "#00C3E5", "#008CAE", "#A8AD9B", "#B3D648", "#43ADA2", "#FBCC8E", "#E0E0E0"]

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent }
    : { cx: number, cy: number, midAngle: string, innerRadius: number, outerRadius: number, percent: number, index?: number }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function UserOverviewChart({ data }: TProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data && data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="bottom" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
