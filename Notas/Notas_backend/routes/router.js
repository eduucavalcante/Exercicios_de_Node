import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await Note.findAll({ order: [["id", "DESC"]] });
	const plainNotes = response.map(note => note.toJSON());
        res.status(200).send(plainNotes);
    } catch(error) {
        res.status(500).send(`Erro ao carregar notas: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
	const response = await Note.findOne({ 
	    where: {
		id: req.params.id
	    }
	});
	const currentNote = response.toJSON();
	res.status(200).send(currentNote);
    } catch(error) {
	res.status(500).send(`Erro ao carregar a nota: ${error}`);
    }
});

router.post('/add', async (req, res) => {
    try {
        await Note.create({
            title: req.body.title,
            content: req.body.content
        });
        res.status(201).json({"message": "Nota criada com sucesso!" });
    } catch(error) {
        res.status(500).send(`Erro ao criar nota: ${error}`);
    }
});

router.delete('/delete/:id', async (req, res) => {
    
    try {
        await Note.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ "message": "Nota excluida com sucesso!"});
    } catch(error) {
        res.status(500).send(`Erro ao deletar nota: ${error}`);
    }
    
})

export default router;
