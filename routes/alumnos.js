const { Router } = require('express');
const { alumnosGet, 
        alumnosPut, 
        alumnosPost, 
        alumnosDelete } = require('../controllers/alumnos');
const router = Router();


router.get('/', (req, res) => {
    alumnosGet(req, res)
});

router.put('/:id', alumnosPut);

router.post('/', alumnosPost);

router.delete('/', alumnosDelete);

module.exports = router;