const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', (req, res) => {
    Post.findAll({order: [["id", "DESC"]]}).then((posts) => {
        const plainPosts = posts.map(post => post.toJSON());
        res.render('home', {
            posts: plainPosts
        });
    }).catch((error) => {
        res.send('Falha ao exibir postagens: ${error}');
    });
});

router.get('/new', (req, res) => {
    res.render('form');
});

router.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((error) => {
        res.send(`Falha ao criar postagem: ${error}`);
    });
});

router.get('/delete/:id', (req, res) => {
    Post.destroy({
	where: {
	    "id": req.params.id
	}
    }).then(() => {
	res.redirect('/');
    }).catch((error) => {
	console.log(`Falha ao excluir: ${error}`);
	res.redirect('/');
    });
});

module.exports = router;
