/*
How to call a async function. 

Methord 1: use then to provide a callback fucntion. 

*/

function fetchThanksgivingEvent() {
    const thanksgivingEvent = {
      title: "Thanksgiving Celebration",
      date: "2024-11-28",
      location: "Community Hall, Main Street",
      activities: [
        "Family Dinner",
        "Turkey Roast",
        "Games and Activities",
        "Thanksgiving Speech",
      ],
    };
  
    return new Promise((resolve) => {
      setTimeout(() => resolve(thanksgivingEvent), 2000); // Simulate delay
    });
  }
  
  fetchThanksgivingEvent()
    .then((eventDetails) => {
      console.log("Thanksgiving Event Details:", eventDetails);
    });