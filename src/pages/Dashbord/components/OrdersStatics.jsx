import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", pv: 2400, uv: 4000 },
  { name: "Feb", pv: 1398, uv: 3000 },
  // ...
];

function OrdersStatics() {
  return (
    <div>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="value" fill="#c8b8a2" radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default OrdersStatics;
