document.addEventListener('DOMContentLoaded', function() {

    // --- PERSONALIZAÇÃO DOS LINKS ---
    // Para adicionar, editar ou remover links, modifique o array 'links' abaixo.
    // - title: O texto principal do botão.
    // - url: O endereço para onde o link aponta.
    // - icon: A classe do ícone do Font Awesome (ex: 'fab fa-instagram').
    // - description (opcional): Um texto curto que aparece abaixo do título.
    const links = [
        {
            title: "Meu Website",
            url: "https://seusite.com",
            icon: "fas fa-globe",
            description: "Confira meu portfólio completo."
        },        
        {
            title: "Compre na Minha Loja",
            url: "https://minhaloja.com",
            icon: "fas fa-shopping-cart",
            description: "Produtos exclusivos e com desconto."
        },
        {
            title: "Fale Comigo no WhatsApp",
            url: "https://wa.me/5583987922753",
            icon: "fab fa-whatsapp",
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/kaiobrl/",
            icon: "fab fa-linkedin"
        },
        {
            title: "Github",
            url: "https://github.com/Kaiobrl",
            icon: "fab fa-github"
        }
    ];

    const linksContainer = document.getElementById('links-container');

    // Gera os links dinamicamente
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-item';
        linkElement.target = '_blank'; // Abre o link em uma nova aba
        linkElement.rel = 'noopener noreferrer';

        let content = `<i class="${link.icon}"></i> ${link.title}`;
        if (link.description) {
            content += `<span class="link-description">${link.description}</span>`;
        }
        linkElement.innerHTML = content;

        linksContainer.appendChild(linkElement);
    });

    // --- FUNCIONALIDADE: BOTÃO VOLTAR AO TOPO ---
    const backToTopButton = document.getElementById('back-to-top');
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };
    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- FUNCIONALIDADE: DATA DA ÚLTIMA ATUALIZAÇÃO ---
    // Define a data de hoje ou uma data específica
    const lastUpdatedDate = new Date().toLocaleDateString('pt-BR'); 
    document.getElementById('last-updated').textContent = lastUpdatedDate;

    // --- FUNCIONALIDADE: COMPARTILHAMENTO ---
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
    document.getElementById('share-instagram').href = `https://instagram.com/formato_livre/tweet?text=${pageTitle}&url=${pageUrl}`;
    document.getElementById('share-telegram').href = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;

});