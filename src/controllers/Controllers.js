const pool = require('../db');

//obtener todas las motos
const getAllMotos = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM task')
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

//obtener las motos por marca
const geMotosbyMark = async (req, res, next) => {
    try {
        const { mark } = req.params;
        const result = await pool.query('SELECT * FROM task where mark = $1', [mark])
        if (result.rows.length === 0) return res.status(404).json({
            message: "moto not found",
        });
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

//obtener las motos por tipo
const geMotosbyType = async (req, res, next) => {
    try {
        const { type } = req.params;
        const result = await pool.query('SELECT * FROM task where type = $1', [type])
        if (result.rows.length === 0) return res.status(404).json({
            message: "moto not found",
        });
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

//insertando motos
const createMoto = async (req, res, next) => {
    const { type, mark, model, description, img, state, units } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task (type, mark, model, description, img, state, units) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
            type,
            mark,
            model,
            description,
            img,
            state,
            units
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}
//actualizar motos
const updateMoto = async (req, res, next) => {
    const { id } = req.params;
    const { type, mark, model, description, img, state, units } = req.body;

    try {
        const result = await pool.query(
            "UPDATE task SET type = $1, mark = $2, model =$3, description = $4, img = $5, state = $6, units = $7 where id = $8", [
            type,
            mark,
            model,
            description,
            img,
            state,
            units,
            id
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

//eliminar las motos por id
const deleteMoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM task where id = $1', [id])
        if (result.rowCount === 0) return res.status(404).json({
            message: "moto not found",
        });
        return res.status(204);
    } catch (error) {
        next(error)
    }
}

//guardando moto

const saveMoto = async (req, res, next) => {
    const { correo, model } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO users (correo, model) VALUES ($1, $2) RETURNING *", [
            correo,
            model
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

//quitar de guardados

const unsaveMoto = async (req, res, next) => {
    const { correo, model } = req.body;

    try {
        const result = await pool.query(
            "DELETE FROM users where correo = $1 AND model = $2 RETURNING *", [
            correo,
            model
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

//listar guardados

const listsaveMoto = async (req, res, next) => {
    const { email } = req.params;
    try {
        const result = await pool.query(
            "SELECT * FROM task, users where users.correo = $1 AND users.model = task.model" , [email])
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllMotos,
    geMotosbyMark,
    geMotosbyType,
    createMoto,
    updateMoto,
    deleteMoto,
    saveMoto,
    unsaveMoto,
    listsaveMoto
}