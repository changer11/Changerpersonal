import { React, useEffect, useState } from "react";
const AllAppointments = () => {
  const [appointmentlist, setappointmentlist] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/appointment")
      .then((res) => res.json())
      .then((data) => setappointmentlist(data));
  });
  console.log(appointmentlist);
  return (
    <div className={`sm:m-0 max-sm:p-2 ${
      !appointmentlist
        ? "bg-[hsl(208,35%,13%)] h-[81.8vh]"
        : "xl:m-5"
    }`}>
      {appointmentlist.length != 0 ? (
        <div className="bg-[hsl(0,0%,100%)] p-3">
          <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-3 pb-2">
            Appointment List
          </h1>
          <div className="flex justify-between h-[50px]">
            <div className="flex items-center gap-2">
              <label htmlFor="">Show</label>
              <select name="" id="" className="form-select">
                <option value="">10</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
              <span>Entries</span>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="">Search</label>
              <input type="search" className="form-control" />
            </div>
          </div>
          <div className="overflow-x-scroll no-scrollbar">
            <table className="table table-bordered text-center mt-2  table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Appointment ID</th>
                  <th>Patient ID</th>
                  <th>Token Number</th>
                  <th>Doctor Name</th>
                  <th>Problem</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {appointmentlist.map(
                  ({ doctorname, status, PatientId, problem, token }, index) =>
                    index < 10 ? (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>{null}</td>
                        <td>{PatientId}</td>
                        <td>{token}</td>
                        <td>{doctorname}</td>
                        <td>{problem}</td>
                        <td>
                          <span
                            className={`text-white h6 text-[10px] p-1 rounded-sm ${
                              status === "Cancel"
                                ? "bg-[rgb(239,110,110)]"
                                : status === "completed"
                                ? "bg-[rgb(60,179,113)]"
                                : "bg-[rgb(255,170,42)]"
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    ) : null
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between">
            <div>
              <span>Showing 1 to 10 of 12 entries</span>
            </div>
            <div>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-outline-secondary rounded-none">
              {" "}
              <i className="fa fa-download text-danger me-1"></i> CSV
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-print text-danger me-1"></i> print
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-pdf-o text-danger me-1"></i> PDF
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-excel-o text-danger me-1"></i> EXCEL
            </button>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-danger rounded-sm">
              <i className="fa fa-trash-o me-1"></i> Delete
            </button>
            <button className="btn btn-outline-secondary rounded-sm bg-danger-25">
              {" "}
              <i className="fa fa-edit me-1"></i>Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-[80vh] items-center">
          <div className="card w-[50%] p-3 text-center bg-[hsl(210,56%,25%)] text-white">
            <p>No Data Available</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default AllAppointments;