const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
 return this.journeys.reduce((accumulator, journey) => {
   return accumulator += journey.distance;
 }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportArray = this.journeys.map((journey) => {
    return journey.transport;
  });
  return transportArray.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  })
};
// Solution based on information from:
// https://stackoverflow.com/questions/38206915/filter-out-array-to-have-only-unique-values/38206980

module.exports = Traveller;
