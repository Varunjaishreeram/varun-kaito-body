import React from 'react';

export const BarChart = () => {
  // Sample data - replace with actual data
  const data = Array(52).fill(0).map(() => Math.random() * 2);

  const maxValue = Math.max(...data);

  return (
    <div className="h-[200px] flex items-end gap-1">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-full bg-[#0088ff] rounded-sm"
          style={{
            height: `${(value / maxValue) * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

