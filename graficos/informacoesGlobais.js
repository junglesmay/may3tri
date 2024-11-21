
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

        async function vizualizarInformacoesGlobais() {
            const res = await fetch(url);
            const dados = await res.json();
            const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9);
            const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
            const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);

            const paragrafo = document.createElement('p');
            paragrafo.classList.add('graficos-container__texto');
            paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas no WhatsApp? Isso significa que aproximadamente <span>${porcentagemConectada}%</span> da população mundial está utilizando o WhatsApp.`;

            const container = document.getElementById('graficos-container');
            container.appendChild(paragrafo);
        }

        // Chama a função para exibir os dados no parágrafo
        vizualizarInformacoesGlobais();

        // Código para o gráfico de barras
        var ctx = document.getElementById('graficoWhatsApp').getContext('2d');
        var graficoWhatsApp = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico
            data: {
                labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], // Dias da semana
                datasets: [{
                    label: 'Usuários no WhatsApp',
                    data: [1, 1, 1, 1, 1, 1, 1], // Dados de exemplo, você pode ajustar conforme necessário
                    backgroundColor: 'rgba(0, 123, 255, 0.5)', // Cor das barras
                    borderColor: 'rgba(0, 123, 255, 1)', // Cor das bordas
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true, // Começar o eixo Y do zero
                        title: {
                            display: true,
                            text: 'Usuários (em bilhões)'
                        }
                    }
                }
            }
        });