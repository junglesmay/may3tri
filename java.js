document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado com sucesso!"); // Verificação
  
    // Dados de exemplo
    const totalUsers = 615000000; // Total de usuários
    const premiumUsers = 239000000; // Usuários premium
  
    // Atualiza os valores no resumo
    document.getElementById("total-users").textContent = totalUsers.toLocaleString();
    document.getElementById("premium-users").textContent = premiumUsers.toLocaleString();
  
    // Dados para o gráfico
    const data = {
      labels: ["Usuários Premium", "Usuários Gratuitos"],
      datasets: [
        {
          data: [premiumUsers, totalUsers - premiumUsers],
          backgroundColor: ["#1db954", "#535353"],
        },
      ],
    };
  
    // Configuração do gráfico
    const config = {
      type: "doughnut", // Tipo de gráfico
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
  
    // Criação do gráfico
    const ctx = document.getElementById("user-chart").getContext("2d");
    new Chart(ctx, config);
  });