/*
Method 2: 
Wrap in an Immediately Invoked Async Function Expression (IIFE). 

*/


async function fetchThanksgivingEvent() {
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
  
  // Wrap in an Immediately Invoked Async Function Expression (IIFE)
  (async () => {
    const eventDetails = await fetchThanksgivingEvent(); // Wait for the Promise to resolve
    console.log("Thanksgiving Event Details:", eventDetails);
  })();