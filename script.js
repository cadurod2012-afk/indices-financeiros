// Dados de exemplo dos índices financeiros
const indicesData = [
    {
        name: "IBOVESPA",
        value: 134_234.50,
        change: 2.45,
        description: "Índice da Bolsa de Valores do Brasil",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    },
    {
        name: "S&P 500",
        value: 5_234.80,
        change: -1.23,
        description: "Índice das 500 maiores empresas dos EUA",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    },
    {
        name: "CDI",
        value: 10.65,
        change: 0.15,
        description: "Certificado de Depósito Interbancário",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    },
    {
        name: "DÓLAR",
        value: 5.12,
        change: 1.05,
        description: "Cotação do Dólar Americano",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    },
    {
        name: "OURO",
        value: 2_045.50,
        change: 0.75,
        description: "Preço do ouro por onça troy",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    },
    {
        name: "BITCOIN",
        value: 62_340.25,
        change: 5.30,
        description: "Maior criptomoeda do mercado",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
    }
];

// Carregar dados quando a página estiver pronta
document.addEventListener('DOMContentLoaded', loadIndices);

function loadIndices() {
    const grid = document.getElementById('indicesGrid');
    grid.innerHTML = ''; // Limpar carregamento

    indicesData.forEach(index => {
        const card = createIndexCard(index);
        grid.appendChild(card);
    });

    // Animar entrada
    const cards = grid.querySelectorAll('.index-card');
    cards.forEach((card, index) => {
        card.style.animation = `slideInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

function createIndexCard(index) {
    const card = document.createElement('div');
    card.className = 'index-card';
    
    const changeClass = index.change >= 0 ? 'positive' : 'negative';
    const changeSymbol = index.change >= 0 ? '▲' : '▼';
    
    card.innerHTML = `
        <h3>${index.name}</h3>
        <div class="value">${formatValue(index.value)}</div>
        <div class="change ${changeClass}">
            ${changeSymbol} ${Math.abs(index.change).toFixed(2)}%
        </div>
        <p>${index.description}</p>
        <p style="margin-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
            Atualizado em: ${index.lastUpdate}
        </p>
    `;
    
    return card;
}

function formatValue(value) {
    if (value >= 1000) {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});