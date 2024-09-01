function addMovie() {
    const title = prompt("영화 제목을 입력하세요:");
    const imageURL = prompt("이미지 URL을 입력하세요:");
    const link = prompt("리뷰 사이트 URL을 입력하세요:");

    if (title && imageURL && link) {
        const ul = document.getElementById('movieList');
        const li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" class="delete-checkbox">
            <img src="${imageURL}" alt="${title} 포스터" style="width: 200px;"><br>
            <a href="${link}" target="_blank">${title}</a>
        `;

        ul.appendChild(li);
    } else {
        alert("모든 필드를 입력해 주세요.");
    }
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('.delete-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    });
}
