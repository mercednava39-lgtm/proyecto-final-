const form = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const container = document.getElementById('comments-container');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const text = commentText.value;
    const now = new Date();
    const dateTime = `${now.toLocaleDateString()} a las ${now.toLocaleTimeString()}`;

    // Crear el elemento del comentario
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-card');

    commentDiv.innerHTML = `
        <p class="comment-date">Publicado el: ${dateTime}</p>
        <p>${text}</p>
        <button class="delete-btn">Eliminar</button>
    `;

    // Agregar funcionalidad para eliminar
    commentDiv.querySelector('.delete-btn').addEventListener('click', () => {
        commentDiv.remove();
    });

    // Agregar al contenedor y limpiar el campo
    container.prepend(commentDiv); // 'prepend' para que el más nuevo salga arriba
    form.reset();
});