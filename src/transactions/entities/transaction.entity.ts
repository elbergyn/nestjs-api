import { Account } from '../../accounts/entities/account.entity';
import { ToNumber } from '../../common/db/to-number.decorator';
import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
}

export const TransactionCategoryList: string[] =
  Object.values(TransactionCategory);

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
  tableName: 'transaction',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @ToNumber
  @Column({
    allowNull: false,
    type: DataType.DECIMAL({ precision: 10, scale: 2 }),
  })
  amount: number;

  @Column({ allowNull: false })
  type: TransactionType;

  @ForeignKey((): any => Account)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  account_id: string;

  @BelongsTo((): any => Account)
  account: Account;
}
