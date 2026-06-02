# 📊 Índices Financeiros

Site com índices financeiros desde 2019 com atualizações contínuas.

## ✨ Características

- 📈 **Acompanhamento de Índices**: IBOVESPA, S&P 500, CDI, Dólar, Ouro, Bitcoin e mais
- 🎨 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🚀 **Deploy Automático**: Atualiza automaticamente via GitHub Pages
- ⚡ **Performance**: Carregamento rápido e otimizado
- 📱 **Interface Moderna**: Design limpo e intuitivo

## 🌐 Acesso ao Site

O site é automaticamente publicado em:
```
https://cadurod2012-afk.github.io/indices-financeiros/
```

## 📝 Como Usar

### Estrutura do Projeto

```
.
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este arquivo
└── .github/workflows/
    └── deploy.yml      # Configuração de deploy automático
```

### Editar Conteúdo

1. **Adicionar novos índices**: Edite o array `indicesData` em `script.js`
2. **Modificar estilos**: Atualize `style.css`
3. **Mudar layout**: Edite `index.html`

Exemplo de como adicionar um novo índice:

```javascript
{
    name: "NASDAQ",
    value: 18_234.50,
    change: 1.45,
    description: "Índice de tecnologia americano",
    lastUpdate: new Date().toLocaleDateString('pt-BR')
}
```

## 🔄 Deploy Automático

O site é automaticamente publicado quando você faz push para a branch `main`:

1. Faça suas alterações localmente
2. Commit: `git commit -m "mensagem"`
3. Push: `git push origin main`
4. O GitHub Pages atualiza automaticamente em segundos!

## 📊 Personalizando os Dados

Para atualizar dados de índices:

1. Abra `script.js`
2. Localize o array `indicesData`
3. Atualize os valores de `value` e `change`
4. Faça commit e push

## 🛠️ Desenvolvimento Local

```bash
# Clonar repositório
git clone https://github.com/cadurod2012-afk/indices-financeiros.git
cd indices-financeiros

# Abrir em um servidor local (Python)
python -m http.server 8000

# Ou com Node.js
npx http-server
```

Então abra `http://localhost:8000` no navegador.

## 🔧 Tecnologias

- **HTML5** - Estrutura
- **CSS3** - Estilos e responsividade
- **JavaScript Vanilla** - Lógica e interações
- **GitHub Pages** - Hosting e deploy automático

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👤 Autor

[cadurod2012-afk](https://github.com/cadurod2012-afk)

---

⭐ Se gostou, não esqueça de deixar uma estrela! ⭐
