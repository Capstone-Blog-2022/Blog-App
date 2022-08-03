// sequelize helps support the CRUD feature of making a new user, finding them by an id as well as an email, and getting all users
import { squelize, Sequelize } from "sequelize";


const roleModel = (sequelize, Sequelize) => {
    const Role = sequelize.define('roles', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING
        }
    })
    return Role
}

module.exports = roleModel;