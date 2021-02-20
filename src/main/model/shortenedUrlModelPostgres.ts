import { Sequelize, DataTypes, ModelAttributes, Model, Optional, Op } from "sequelize";

export const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialectOptions: {
        ssl: false
    }
});

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
