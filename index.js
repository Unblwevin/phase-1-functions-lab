function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters location
    const distance = Math.abs(pickupLocation - hqLocation); // calculate the absolute difference between pickupLocation and hqLocation
    return distance;
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blockToFeetConversionRate = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * blockToFeetConversionRate;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startingLocation, destinationLocation) {
    const blockToFeetConversionRate = 264;
    const distanceInBlocks = Math.abs(destinationLocation - startingLocation);
    const distanceInFeet = distanceInBlocks * blockToFeetConversionRate;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet <= 2000) {
      const distanceInFeetAfterFreeSample = distanceInFeet - 400;
      const farePrice = distanceInFeetAfterFreeSample * 0.02;
      return farePrice;
    } else if (distanceInFeet <= 2500) {
      return 25; // Flat fare price for distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Returns an error message for rides over 2500 feet
    }
  }