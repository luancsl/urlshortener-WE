import { Sequelize, DataTypes, ModelAttributes, Model, Optional, Op } from "sequelize";

const optionsProd = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
}

const optionsLocal = {
    dialectOptions: {
        ssl: false
    },
}

export const sequelize = new Sequelize(process.env.DATABASE_URL, process.env.MODE ? optionsLocal : optionsProd);

export interface IShortenedUrlPostgresModel extends Model {
    _id: string;
    url: string;
}

export const shortenedUrlPostgresModel = sequelize.define<IShortenedUrlPostgresModel>('ShortenedUrl', {
    _id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

sequelize.sync();
