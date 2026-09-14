document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const likesCountSpan = document.getElementById("likesCount");
    const otherLikesSpan = document.getElementById("otherLikes");
    const postMedia = document.getElementById("postMedia");
    const bookmarkBtn = document.getElementById("bookmarkBtn");

    // Contador inicia sempre em 0
    let totalLikes = 0;
    let isLiked = false;

    // Função centralizada para adicionar ou remover curtida
    function addLike() {
        if (!isLiked) {
            isLiked = true;
            totalLikes++;
            likeBtn.classList.add("liked");
        } else {
            isLiked = false;
            totalLikes = Math.max(0, totalLikes - 1);
            likeBtn.classList.remove("liked");
        }

        // Atualiza os números na tela em tempo real
        likesCountSpan.textContent = totalLikes;
        otherLikesSpan.textContent = totalLikes + " outros";

        // Efeito visual de zoom (bounce) no ícone do coração
        const svg = likeBtn.querySelector("svg");
        if (svg) {
            svg.style.transform = "scale(1.3)";
            setTimeout(() => {
                svg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // Evento de clique no botão de curtir
    if (likeBtn) {
        likeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Evento de clique na imagem principal do post (também curte)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Botão de Salvar (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

            const svg = bookmarkBtn.querySelector("svg");
            if (svg) {
                svg.style.transform = "scale(1.2)";
                setTimeout(() => {
                    svg.style.transform = "scale(1)";
                }, 150);
            }
        });
    }
});