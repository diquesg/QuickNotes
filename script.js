function addNote() {
    const input = document.getElementById('note-input');
    const noteText = input.value.trim();
    if (noteText) {
        const noteList = document.getElementById('note-list');
        const li = document.createElement('li');
        li.textContent = noteText;
        li.onclick = () => li.remove();
        noteList.appendChild(li);
        input.value = '';
    }
}