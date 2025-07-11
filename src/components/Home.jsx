import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center p-5 bg-light"
      style={{ height: "85vh" }}
    >
      <h1 className="fw-bold display-4 text-primary mb-3">Welcome to DoFocus</h1>
      <p className="lead text-secondary w-75">
        Your personal growth companion — track your daily goals, take on challenges, reflect, and build better habits every day.
      </p>

      <div className="mt-4">
        <Link to="/streak" className="btn btn-success btn-lg m-2">
          Start Tracking Goals
        </Link>
        <Link to="/todo" className="btn btn-warning btn-lg m-2">
          Make To DOs
        </Link>
        <Link to="/notes" className="btn btn-info btn-lg m-2">
          View Notes
        </Link>
      </div>

      <footer className="mt-auto text-muted small mt-5">
        <p>Stay consistent. Stay focused. 🚀</p>
      </footer>
    </div>
  );
};

export default Home;


{
  /* <div className="container-fluid py-4" style={{ height: "85vh", overflowY: "auto" }}>
      <div className="border rounded p-4 bg-light">
        {/* Header */
}
// <div className="mb-4">
//   <h2>
//     <i className="fas fa-home me-2 text-primary"></i>Welcome to DoFocus Dashboard
//   </h2>
//   <p className="text-muted">Your personal productivity and focus management space.</p>
// </div>

{
  /* Overview Cards */
}
// <div className="row g-4 mb-4">
//   {[
//     { title: "Tasks", icon: "fa-tasks", color: "primary" },
//     { title: "Projects", icon: "fa-folder-open", color: "success" },
//     { title: "Goals", icon: "fa-bullseye", color: "warning" },
//     { title: "Stats", icon: "fa-chart-line", color: "info" },
//   ].map((card, index) => (
//     <div className="col-md-3 col-sm-6" key={index}>
//       <div className={`card border-${card.color} shadow-sm`}>
//         <div className="card-body">
//           <h5 className="card-title">
//             <i className={`fas ${card.icon} me-2 text-${card.color}`}></i>
//             {card.title}
//           </h5>
//           <p className="card-text text-muted">
//             Overview of your {card.title.toLowerCase()} this week.
//           </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

{
  /* Notifications */
}
// <div className="mb-4">
//   <h5 className="mb-3">
//     <i className="fas fa-bell text-danger me-2"></i>Notifications
//   </h5>
//   <ul className="list-group">
//     <li className="list-group-item">🔔 You have 3 tasks due today.</li>
//     <li className="list-group-item">📊 Your weekly productivity report is ready.</li>
//     <li className="list-group-item">✅ Update your project milestones.</li>
//   </ul>
// </div>

{
  /* Quick Actions */
}
//     <div>
//       <h5 className="mb-3">
//         <i className="fas fa-bolt text-warning me-2"></i>Quick Actions
//       </h5>
//       <div className="d-flex flex-wrap gap-2">
//         <button className="btn btn-primary">
//           <i className="fas fa-plus me-1"></i> Add Task
//         </button>
//         <button className="btn btn-success">
//           <i className="fas fa-folder-plus me-1"></i> New Project
//         </button>
//         <button className="btn btn-warning text-dark">
//           <i className="fas fa-chart-pie me-1"></i> View Reports
//         </button>
//         <button className="btn btn-secondary">
//           <i className="fas fa-cog me-1"></i> Settings
//         </button>
//       </div>
//     </div>
//   </div>
// </div> */}
