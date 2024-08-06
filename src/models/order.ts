import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import { ProductCart, User } from "./";
  
  @Table({
    tableName: "orders",
    timestamps: true,
  })
  export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @ForeignKey(() => User)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId!: number;
  
    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => ProductCart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    productCartId!: number;

    @BelongsTo(() => ProductCart)
    productCart!: ProductCart;

    @Column({
      type: DataType.FLOAT,
      allowNull: false,
    })
    total!: number;
  }