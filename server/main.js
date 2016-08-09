import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Check to see if any data exists in our Employees collection
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    // If no data exists in our collection, then we can use
    // Faker to generate some dummy data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      // Insert 5000 new employees generated
      // via faker into our Employees collection
      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar(),
      });
    });
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});
