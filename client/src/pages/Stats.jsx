// import React from "react";
// import {
//   FaCalendarCheck,
//   FaHospital,
//   FaUserMd,
//   FaStethoscope,
// } from "react-icons/fa";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Wrapper from "../assets/wrappers/StatsContainer";

// const StatsItem = ({ count, title, icon, color, bcg }) => {
//   return (
//     <article
//       className="stat-item"
//       style={{ borderBottom: `5px solid ${color}` }}
//     >
//       <header>
//         <span className="stat-icon" style={{ background: bcg }}>
//           {icon}
//         </span>
//         <span className="stat-count">{count}</span>
//       </header>
//       <h5 className="stat-title">{title}</h5>
//     </article>
//   );
// };

// const ChartsContainer = ({ data }) => {
//   return (
//     <article className="charts-container">
//       <h4>Application Status Breakdown</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis allowDecimals={false} />
//           <Tooltip />
//           <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
//         </BarChart>
//       </ResponsiveContainer>
//     </article>
//   );
// };

// const Stats = () => {
//   // Sample data for demonstration
//   const statsData = [
//     {
//       id: 1,
//       count: 12,
//       title: "Active Applications",
//       icon: <FaCalendarCheck />,
//       color: "#2cb1bc",
//       bcg: "#e0fcff",
//     },
//     {
//       id: 2,
//       count: 5,
//       title: "Interviews Scheduled",
//       icon: <FaHospital />,
//       color: "#647acb",
//       bcg: "#e0e8f9",
//     },
//     {
//       id: 3,
//       count: 3,
//       title: "Offers Received",
//       icon: <FaUserMd />,
//       color: "#d66a6a",
//       bcg: "#ffeeee",
//     },
//     {
//       id: 4,
//       count: 8,
//       title: "Specialties Applied",
//       icon: <FaStethoscope />,
//       color: "#ffb100",
//       bcg: "#fcefc7",
//     },
//   ];

//   const chartData = [
//     { name: "Pending", count: 8 },
//     { name: "Interview", count: 5 },
//     { name: "Assessment", count: 3 },
//     { name: "Offered", count: 2 },
//     { name: "Declined", count: 1 },
//   ];

//   return (
//     <Wrapper>
//       <h4 className="page-title">Medical Career Dashboard</h4>

//       <div className="stats-container">
//         {statsData.map((item) => (
//           <StatsItem key={item.id} {...item} />
//         ))}
//       </div>

//       <ChartsContainer data={chartData} />

//       <div className="insights-container">
//         <h4>Application Insights</h4>
//         <div className="insights-grid">
//           <div className="insight-card">
//             <h5>Most Applied Specialty</h5>
//             <p>Emergency Medicine (4 applications)</p>
//           </div>
//           <div className="insight-card">
//             <h5>Average Response Time</h5>
//             <p>12 days</p>
//           </div>
//           <div className="insight-card">
//             <h5>Top Location</h5>
//             <p>Boston, MA (3 applications)</p>
//           </div>
//           <div className="insight-card">
//             <h5>Success Rate</h5>
//             <p>25% (3 offers from 12 applications)</p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Stats;
import React from "react";
import {
  FaCalendarCheck,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <article className="stat-card" style={{ borderLeft: `4px solid ${color}` }}>
      <header className="stat-header">
        <span className="stat-icon" style={{ background: bcg }}>
          {icon}
        </span>
        <div className="stat-info">
          <span className="stat-count">{count}</span>
          <h5 className="stat-title">{title}</h5>
        </div>
      </header>
    </article>
  );
};

const ChartsContainer = ({ data }) => {
  return (
    <article className="charts-container">
      <h4 className="section-title">Application Status Breakdown</h4>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="name"
              tick={{ fill: "var(--text-color)" }}
              axisLine={{ stroke: "#e0e0e0" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: "var(--text-color)" }}
              axisLine={{ stroke: "#e0e0e0" }}
            />
            <Tooltip
              contentStyle={{
                background: "var(--background-secondary-color)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Bar
              dataKey="count"
              fill="var(--primary-500)"
              barSize={60}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};

const InsightCard = ({ title, value }) => (
  <div className="insight-card">
    <h5 className="insight-title">{title}</h5>
    <p className="insight-value">{value}</p>
  </div>
);

const Stats = () => {
  const statsData = [
    {
      id: 1,
      count: 12,
      title: "Active Applications",
      icon: <FaCalendarCheck />,
      color: "var(--primary-500)",
      bcg: "var(--primary-100)",
    },
    {
      id: 2,
      count: 5,
      title: "Interviews Scheduled",
      icon: <FaHospital />,
      color: "var(--info-dark)",
      bcg: "var(--info-light)",
    },
    {
      id: 3,
      count: 3,
      title: "Offers Received",
      icon: <FaUserMd />,
      color: "var(--success-dark)",
      bcg: "var(--success-light)",
    },
    {
      id: 4,
      count: 8,
      title: "Specialties Applied",
      icon: <FaStethoscope />,
      color: "var(--warning-dark)",
      bcg: "var(--warning-light)",
    },
  ];

  const chartData = [
    { name: "Pending", count: 8 },
    { name: "Interview", count: 5 },
    { name: "Assessment", count: 3 },
    { name: "Offered", count: 2 },
    { name: "Declined", count: 1 },
  ];

  return (
    <Wrapper>
      <div className="dashboard-header">
        <h2 className="page-title">Medical Career Dashboard</h2>
      </div>

      <div className="stats-grid">
        {statsData.map((item) => (
          <StatsItem key={item.id} {...item} />
        ))}
      </div>

      <ChartsContainer data={chartData} />

      <section className="insights-section">
        <h4 className="section-title">Application Insights</h4>
        <div className="insights-grid">
          <InsightCard
            title="Most Applied Specialty"
            value="Emergency Medicine (4)"
          />
          <InsightCard title="Average Response Time" value="12 days" />
          <InsightCard title="Top Location" value="Boston, MA (3)" />
          <InsightCard title="Success Rate" value="25%" />
        </div>
      </section>
    </Wrapper>
  );
};

export default Stats;
