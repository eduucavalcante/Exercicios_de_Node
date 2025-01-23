const API_URL = 'http://localhost:8081';

const form = document.querySelector("form");
const titleInput = document.querySelector("input");
const contentInput = document.querySelector("textarea");

async function addNote(event) {
    event.preventDefault();
    
    const newNote = {
        title: titleInput.value,
        content: contentInput.value
    };
    
    try {
        await axios.post(`${API_URL}/add`, newNote);
        window.location.href = "/index.html";
    } catch(error) {
        console.error(`Erro ao criar nota: ${error}`);
        alert("Erro ao criar nota.");
    }
}

form.addEventListener("submit", addNote);