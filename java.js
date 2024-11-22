document.addEventListener("DOMContentLoaded", () => {
    // Dados reais
    const totalUsuarios = 615000000; // Total de usuários
    const usuariosPremium = 239000000; // Usuários Premium
  
    // Atualiza os valores no resumo
    document.getElementById("total-usuarios").textContent = totalUsuarios.toLocaleString();
    document.getElementById("usuarios-premium").textContent = usuariosPremium.toLocaleString();
  
    // Dados para o gráfico de barras
    const dados = {
      labels: ["Usuários Premium", "Usuários Gratuitos"],
      datasets: [
        {
          label: "Número de Usuários",
          data: [usuariosPremium, totalUsuarios - usuariosPremium],
          backgroundColor: ["#1db954", "#535353"], // Cores das barras
          borderColor: ["#1db954", "#535353"], // Bordas das barras
          borderWidth: 1,
        },
      ],
    };
  
    // Configuração do gráfico de barras
    const configuracao = {
      type: "bar", // Tipo de gráfico
      data: dados,
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
    const ctx = document.getElementById("grafico-usuarios").getContext("2d");
    new Chart(ctx, configuracao);
  });