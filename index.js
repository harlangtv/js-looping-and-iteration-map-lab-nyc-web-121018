function lowerCaseDrivers(driverList) {
  return driverList.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes(driverList) {
  let newDriverList = [];
  driverList.map(function(fullName) {
    let twoNames = fullName.split(" ");
    let newOject = {firstName: twoNames[0], lastName: twoNames[1]};
    newDriverList.push(newObject);
  });
  return newDriverList;
};

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
};
