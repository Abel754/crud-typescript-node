import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async( req: Request, res: Response ) => {

    const usuarios = await Usuario.findAll(); // Agafa tots els registres

    res.json({
        usuarios
    })

}

export const getUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if( usuario ) {
        res.json({
            usuario
        })
    } else {
        res.status(404).json({
            msg: 'El usuario con ID ' + id +' no existe'
        })
    }

}

export const postUsuario = async( req: Request, res: Response ) => {

    const { body } = req;
    
    const email = body.email;

    if( !email ) {
        res.status(400).json({
            msg: 'Inserte un email'
        })
    }


    try {

        const existeEmail = await Usuario.findOne({ // Comprova si l'email que es passa per paràmetre ja existeix a la BD
            where: {
                email: body.email
            }
        });

        if( existeEmail ) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            })
        }
        
        const usuario = Usuario.build(body); // Per crear una nova instància d'Usuario

        await usuario.save(); // El guardem a la BD

        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }

}

export const putUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk( id );
        if( !usuario ) {
            return res.status(400).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        if( body.email ) {
            const existeEmail = await Usuario.findOne({ // Comprova si l'email que es passa per paràmetre ja existeix a la BD
                where: {
                    email: body.email
                }
            });
    
            if( existeEmail ) {
                return res.status(400).json({
                    msg: 'Ya existe un usuario con el email ' + body.email
                })
            }          
        }
        
        await usuario.update( body );
        
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }

}

export const deleteUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if( !usuario ) {
        return res.status(400).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await usuario.update({ estado: 0 }); // Canviem l'estado a 0. Estado es posa en 1 automàticament quan es crea, si està en 0, es com si no existís l'usuari

    res.json({
        usuario
    })

}


