const texts = {
    en: {
        title: "Welcome to Our Fast Logistics Software",
        description: "Our software streamlines the logistics process, ensuring quick deliveries and efficient inventory management.",
        button: "Switch to Portuguese",
        imageDescriptions: [
            `The system allows customers to choose the route that best meets their needs.
            With a highly efficient algorithm, the platform analyzes various variables
            to determine the optimal delivery order, ensuring that products reach
            their destination quickly and reliably. This flexibility not only provides
            a personalized experience but also brings significant savings on freight costs,
            resulting in a positive impact on the company's finances and contributing
            to more efficient logistics management.`,
            
            `After selecting the route and with the system responsible for mapping the best path,
            the customer gains the advantage of saving this route for future deliveries.
            This feature not only streamlines the logistics process but also allows the customer
            to reuse optimized routes, saving time and ensuring efficiency in their delivery operations.`,
            
            `After selecting the route and with the system responsible for mapping the best path,
            the customer gains the advantage of saving this route for future deliveries.
            The client can simply click on the saved route and proceed to send their packages,
            streamlining the logistics process and ensuring efficiency in their delivery operations.`
        ]
    },
    pt: {
        title: "Bem-vindo ao Nosso Software de Logística Rápida",
        description: "Nosso software otimiza o processo logístico, garantindo entregas rápidas e gestão eficiente de inventário.",
        button: "Mudar para Inglês",
        imageDescriptions: [
            `O sistema permite que os clientes escolham a rota que melhor atende às suas necessidades.
            Com um algoritmo altamente eficiente, a plataforma analisa várias variáveis
            para determinar a ordem de entrega ideal, garantindo que os produtos cheguem
            rapidamente ao seu destino de forma confiável. Essa flexibilidade não só proporciona
            uma experiência personalizada, mas também traz economias significativas nos custos de frete,
            resultando em um impacto positivo nas finanças da empresa e contribuindo
            para uma gestão logística mais eficiente.`,
        
            `Após selecionar a rota e com o sistema responsável por mapear o melhor caminho,
            o cliente ganha a vantagem de salvar essa rota para entregas futuras.
            Este recurso não só simplifica o processo logístico, mas também permite que o cliente
            reutilize rotas otimizadas, economizando tempo e garantindo eficiência em suas operações de entrega.`,
        
            `Após selecionar a rota e com o sistema responsável por mapear o melhor caminho,
            o cliente ganha a vantagem de salvar essa rota para entregas futuras.
            O cliente pode simplesmente clicar na rota salva e prosseguir para enviar seus pacotes,
            simplificando o processo logístico e garantindo eficiência em suas operações de entrega.`
        ]
    }
};

let currentLang = 'en'; // Idioma padrão

document.getElementById('toggleLang').addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'pt' : 'en'; // Alterna o idioma
    updateText();
});

function updateText() {
    document.getElementById('title').textContent = texts[currentLang].title;
    document.getElementById('description').textContent = texts[currentLang].description;
    document.getElementById('toggleLang').querySelector('span').textContent = texts[currentLang].button; // Atualiza o texto do botão
    
    const imageDescriptions = texts[currentLang].imageDescriptions; // Pega as descrições da linguagem atual
    document.getElementById('desc1').textContent = imageDescriptions[0]; // Atualiza a descrição da primeira imagem
    document.getElementById('desc2').textContent = imageDescriptions[1]; // Atualiza a descrição da segunda imagem
    document.getElementById('desc3').textContent = imageDescriptions[2]; // Atualiza a descrição da terceira imagem
}
