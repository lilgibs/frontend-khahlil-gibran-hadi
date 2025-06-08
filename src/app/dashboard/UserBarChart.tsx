import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type TProps = {
  data: { name: string, value: number }[]
}

export default function UserBarChart({ data }: TProps) {
  const COLORS = ["#81B622", "#00C3E5", "#008CAE", "#A8AD9B", "#B3D648", "#43ADA2", "#FBCC8E", "#E0E0E0"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        margin={{
          left: 50,
        }}
        layout="vertical"
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" name="User Count">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              name={entry.name} // will be used in tooltip
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
