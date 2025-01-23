const API_URL = 'http://localhost:8081';

const noteContainer = document.querySelector(".noteContainer");

async function fetchNoteDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const noteId = urlParams.get("id");
    
    try {
        const response = await axios.get(`${API_URL}/${noteId}`);
        const note = response.data;
        
        noteContainer.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <p style="font-size: 10px">${note.createdAt}</p>
        `;
    } catch(error) {
        console.log(`Erro ao carregar nota: ${error}`);
        noteContainer.innerHTML = "<p>Erro ao carregar nota...</p>";
    }
}

fetchNoteDetails();