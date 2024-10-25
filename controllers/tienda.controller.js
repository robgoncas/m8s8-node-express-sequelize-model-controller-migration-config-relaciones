
const {Tienda} = require('../models');

const crearTienda = async (req, res) => {
    try {
        const { nombre, direccion, rubro, ciudad } = req.body;
        const crearTienda = await Tienda.create({
            nombre,
            direccion,
            rubro,
            ciudad
        });
        res.status(201).json({
            message: 'Tienda creada con exito',
            codigo: 201,
            error: false,
            tiendaCreada: crearTienda
        });

    } catch (error) {

        res.status(400).json({
            message: 'Error al crear la tienda',
            codigo: 400,
            error: true,
            error: error.message
        });

    }

}

const listarTiendas = async (req, res) => {
    try {
        const todasLasTiendas = await Tienda.findAll();
        res.status(200).json({
            message: 'Lista de tiendas',
            code: 200,
            error: false,
            tiendas: todasLasTiendas
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al listar las tiendas',
            code: 500,
            error: true
        })
    }
}

const eliminarTiendaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const eliminarTienda = await Tienda.destroy({ where: { id: id } });
        res.status(200).json({
            message: 'Tienda eliminada con exito',
            code: 200,
            error: false,
            tiendaEliminada: eliminarTienda
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar la tienda',
            code: 500,
            error: true,
            errorMessage: error.message
        })
    }
}

const actualizarTienda = async (req, res) => {
    try {
        const { nombre, direccion, rubro, ciudad } = req.body
        const id = req.params.id;
        const tiendaActualizar = await Tienda.findByPk(id);
        if (!tiendaActualizar) {
            return res.status(404).json({
                message: 'Tienda no encontrada',
                code: 404,
                error: true
            })
        }
        //Actualizo la tienda
        await tiendaActualizar.update({ nombre, direccion, rubro, ciudad });
        //Envio mensaje OK
        res.status(200).json({
            message: 'Tienda actualizada con exito',
            code: 200,
            error: false,
            tiendaActualizada: tiendaActualizar
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            code: 500,
            message: 'Error al actualizar la tienda'
        })
    }
}

const obtenerTiendaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const tienda = await Tienda.findByPk(id);
        if (!tienda) {
            return res.status(404).json({
                message: 'Tienda no encontrada',
                code: 404,
                error: true
            })
        }
        res.status(200).json({
            message: 'Tienda encontrada',
            code: 200,
            error: false,
            tienda: tienda
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            code: 500,
            message: 'Error al buscar la tienda'
        })
    }
}

module.exports = {
    crearTienda, listarTiendas, eliminarTiendaPorId, actualizarTienda, obtenerTiendaPorId
}