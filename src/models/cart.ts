import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from "sequelize-typescript";
import { ProductCart, User } from "./";
  
  @Table({
    tableName: "carts",
    timestamps: true, 
  })
  export class Cart extends Model {
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

    @HasMany(() => ProductCart)
    productCart!: ProductCart[]
  }