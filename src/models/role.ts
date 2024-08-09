import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
import { User } from "./";
  
  @Table({
    tableName: "roles",
    timestamps: false,
  })
  export class Role extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name!: string;
    
    @HasMany(() => User)
    users!: User[];
  }