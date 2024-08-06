import { Sequelize } from 'sequelize-typescript';
import { User, Product, Cart, Entity, Order, ProductCart, Permit, Role } from '../models';
import dotenv from 'dotenv';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [User, Product, Cart, Entity, Order, Permit, ProductCart, Role],
});

export default sequelize;
