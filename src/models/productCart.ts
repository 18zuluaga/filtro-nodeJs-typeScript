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
import { Cart, Order, Product } from "./";
  
  @Table({
    tableName: "products_cart",
    timestamps: true,
  })
  export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @ForeignKey(() => Cart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    cartId!: number;
  
    @BelongsTo(() => Cart)
    cart!: Cart;

    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    productId!: number;

    @BelongsTo(() => Product)
    product!: Product;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;

    @HasMany(() => Order)
    orders!: Order[];
  }