const { Router } = require('express');
const { getAllMotos, createMoto, updateMoto, geMotosbyMark, geMotosbyType, deleteMoto, saveMoto, unsaveMoto, listsaveMoto } = require('../controllers/Controllers')

const router = Router();

router.get('/get-motos', getAllMotos);

router.get('/get-motos/mark/:mark', geMotosbyMark);

router.get('/get-motos/type/:type', geMotosbyType);

router.post('/new-moto', createMoto);

router.put('/update-moto/:id', updateMoto);

router.delete('/delete-moto/:id', deleteMoto);

router.post('/save-moto', saveMoto);

router.post('/unsave-moto', unsaveMoto);

router.get('/listsave-moto/:email', listsaveMoto);

module.exports = router;