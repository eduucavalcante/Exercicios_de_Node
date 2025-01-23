const API_URL = 'http://localhost:8081';

const notesContainer = document.querySelector('.notesContainer');
const newBtn = document.querySelector("#new");

newBtn.addEventListener("click", () => {
    window.location.href = 'form.html';
});

async function fetchNotes() {
    
    try {
        const response = await axios.get(`${API_URL}/`);
        const notes = response.data;
        notesContainer.innerHTML = '';
        
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button class="view" onclick="viewNote(${note.id})">Ver nota</button>
                <button class="del" onclick='deleteNote(${note.id})'>Apagar nota</button>
            `;
            noteElement.classList.add("note");
            notesContainer.appendChild(noteElement);
        });
    } catch(error) {
        console.error(`Erro ao carregar notas: ${error}`);
        notesContainer.innerHTML = '<p>Erro ao carregar as notas.</p>';
    }
    
}

async function deleteNote(noteId) {
    try {
        const confirmDelete = confirm("Tem certeza que deseja apagar a nota?");
        if(!confirmDelete) return;
        
        await axios.delete(`${API_URL}/delete/${noteId}`);
        alert("Nota excluída com sucesso!");
        fetchNotes();
    } catch(error) {
        console.error(`Erro ao apagar nota: ${error}`);
        alert("Erro ao apagar nota.");
    }
}

function viewNote(noteId) {
    window.location.href = `/note.html?id=${noteId}`;
}

fetchNotes();