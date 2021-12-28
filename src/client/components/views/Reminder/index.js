import React from "react";
import "./style.scss";

export default function Reminder() {
  return (
    <section>
      <div className="container">
        <div class="row mt-5">
          <div class="col-4">
            <div class="card">
              <div class="card-header">Filters</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">All</li>
                <li class="list-group-item">Today</li>
                <li class="list-group-item">Upcomming</li>
              </ul>
            </div>
            <div class="card mt-4">
              <div class="card-header">Status</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">All</li>
                <li class="list-group-item">Incompleted</li>
                <li class="list-group-item">Completed</li>
              </ul>
            </div>
            <div class="card mt-4">
              <div class="card-header">Category</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">All</li>
                <li class="list-group-item">Birthdays</li>
                <li class="list-group-item">Holidays</li>
                <li class="list-group-item">Anniversary</li>
                <li class="list-group-item">Others</li>
              </ul>
            </div>
            <div class="card mt-4">
              <div class="card-header">Priority</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">None</li>
                <li class="list-group-item">High</li>
                <li class="list-group-item">Medium</li>
                <li class="list-group-item">Low</li>
              </ul>
            </div>
          </div>
          <div class="col-8">
            <div class="row">
              <div className="col-7 d-inline-flex">
                <div className="dateLabel">Sort By Date :</div>
                <input type="date" className="form-control dateInput" />
              </div>
              <div class="col-5">
                <button type="button" class="btn btn-primary btn-block">
                  Create Reminder
                </button>
              </div>
            </div>
            <div>
            <div className="row mt-4 py-2">
              <table class="table table-hover">
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
