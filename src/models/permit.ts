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
import { Entity, Role } from "./";

@Table({
  tableName: "Permissions",
  timestamps: false,
})
export class Permit extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId!: number;

  @BelongsTo(() => Role)
  role!: Role;

  @ForeignKey(() => Entity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  EntityId!: number;

  @BelongsTo(() => Entity)
  entity!: Entity;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canCreate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canUpdate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canDelete!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canGet!: boolean;
}
