import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees.js';
import EmployeeDetail from './EmployeeDetail';

// Default number of records subscribed per page
const PER_PAGE = 20;

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee =>
            <EmployeeDetail
              key={Math.random()}
              employee={employee}
            />
          )}
        </div>
        <button
          onClick={() => Meteor.subscribe('employees', 40)}
          className="btn btn-primary"
        >
          Load more ..
        </button>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  employees: React.PropTypes.array,
  employee: React.PropTypes.object,
  _id: React.PropTypes.object,
};

export default createContainer(() => {
  // Set up a subscription, then return an object. Whatever we
  // return will be sent to EmployeeList as a prop
  Meteor.subscribe('employees', PER_PAGE);
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
