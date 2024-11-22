document.addEventListener("DOMContentLoaded", () => {
    // Example data
    const totalUsers = 500000000;
    const premiumUsers = 210000000;
  
    // Update text in the summary
    document.getElementById("total-users").textContent = totalUsers.toLocaleString();
    document.getElementById("premium-users").textContent = premiumUsers.toLocaleString();
  
    // Chart data
    const data = {
      labels: ["Premium Users", "Free Users"],
      datasets: [{
        data: [premiumUsers, totalUsers - premiumUsers],
        backgroundColor: ["#1db954", "#535353"],
      }],
    };
  
    // Chart configuration
    const config = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };
  
    // Create chart
    const ctx = document.getElementById("user-chart").getContext("2d");
    new Chart(ctx, config);
  });