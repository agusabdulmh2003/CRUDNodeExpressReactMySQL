import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import bcrypt from "bcryptjs";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

// Hash password before creating user
User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
});

export default User;

(async () => {
    await db.sync();
})();
