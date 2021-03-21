const locations = new Observable((observer) => {
    let watchId;
  
    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition((position) => {
        observer.next(position);
      }, (error) => {
        observer.error(error);
      });
    } else {
      observer.error('Geolocation not available');
    }
  
    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });
  
  // Call subscribe() to start listening for updates.
  const locationsSubscription = locations.subscribe({
    next(position) {
      console.log('Current Position: ', position);
    },
    error(msg) {
      console.log('Error Getting Location: ', msg);
    }
  });
  
  // Stop listening for location after 10 seconds
  setTimeout(() => {
    locationsSubscription.unsubscribe();
  }, 10000);