import React from "react";
import "./style.scss";

export default function Reminder() {
  return (
    <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Filters</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Today</li>
                <li className="list-group-item">Upcomming</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Status</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Incompleted</li>
                <li className="list-group-item">Completed</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Category</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Birthdays</li>
                <li className="list-group-item">Holidays</li>
                <li className="list-group-item">Anniversary</li>
                <li className="list-group-item">Others</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Priority</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">None</li>
                <li className="list-group-item">High</li>
                <li className="list-group-item">Medium</li>
                <li className="list-group-item">Low</li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-7 d-inline-flex">
                <div className="dateLabel">Sort By Date :</div>
                <input type="date" className="form-control dateInput" />
              </div>
              <div className="col-5">
                <button type="button" className="btn btn-primary btn-block">
                  Create Reminder
                </button>
              </div>
            </div>
            <div>
              <div className="row mt-4 py-2">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Date Wed 20 Dec</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dsdsd</td>
                    </tr>
                    <tr>
                      <td>dsdsd sdsd</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
