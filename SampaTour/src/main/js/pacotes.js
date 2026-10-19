
        // Abre a janela de detalhes ao clicar em card
        (function () {
            var janela = document.getElementById('janela-detalhes');
            var cards = document.querySelectorAll('.card-passeio');

            cards.forEach(function (card) {
                var botao = card.querySelector('.card-abrir');

                botao.addEventListener('click', function () {
                    var categoria = card.closest('.categoria-pacotes').querySelector('h3');

                    janela.querySelector('.janela-categoria').textContent = categoria.textContent;
                    janela.querySelector('.janela-titulo').textContent = botao.textContent;
                    janela.querySelector('.janela-meta').textContent =
                        card.querySelector('.card-detalhes').textContent;
                    janela.querySelector('.janela-texto').innerHTML =
                        card.querySelector('.card-completo').innerHTML;
                    janela.querySelector('.janela-preco').innerHTML =
                        card.querySelector('.card-preco').innerHTML;
                    janela.querySelector('.janela-imagem').innerHTML =
                        card.querySelector('.card-imagem').innerHTML;

                    janela.showModal();
                });
            });

            // Fechar: botão ×, clique fora da janela Esc já fecha sozinho
            janela.querySelector('.janela-fechar').addEventListener('click', function () {
                janela.close();
            });

            janela.addEventListener('click', function (evento) {
                if (evento.target === janela) {
                    janela.close();
                }
            });
        })();
