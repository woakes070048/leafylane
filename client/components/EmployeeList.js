import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees.js';
import EmployeeDetail from './EmployeeDetail';

const EmployeeList = (props) => {
  // Access our data on props.
  // i.e. props.employees = an array of employee objects
  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee =>
          <EmployeeDetail
            key={employee._id}
            employee={employee}
          />
        )}
      </div>
    </div>
  );
};

export default createContainer(() => {
  // Set up a subscription, then return an object. Whatever we
  // return will be sent to EmployeeList as a prop
  Meteor.subscribe('employees');
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
