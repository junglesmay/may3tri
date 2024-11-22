document.addEventListener("DOMContentLoaded", () => {
    // Dados reais
    const totalUsers = 615000000; // Total de usuários
    const premiumUsers = 239000000; // Usuários Premium
  
    // Atualiza os valores no resumo
    document.getElementById("total-users").textContent = totalUsers.toLocaleString();
    document.getElementById("premium-users").textContent = premiumUsers.toLocaleString();
  
    // Dados para o gráfico de barras
    const data = {
      labels: ["Premium Users", "Free Users"],
      datasets: [
        {
          label: "Number of Users",
          data: [premiumUsers, totalUsers - premiumUsers],
          backgroundColor: ["#1db954", "#535353"], // Cores das barras
          borderColor: ["#1db954", "#535353"], // Bordas das barras
          borderWidth: 1,
        },
      ],
    };
  
    // Configuração do gráfico de barras
    const config = {
      type: "bar", // Alteração para o tipo de gráfico de barras
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Iniciar o eixo Y no zero
          },
        },
        plugins: {
          legend: {
            display: false, // Esconde a legenda para gráficos simples
          },
        },
      },
    };
  
    // Criação do gráfico
    const ctx = document.getElementById("user-chart").getContext("2d");
    new Chart(ctx, config);
  });