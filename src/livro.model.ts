import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({
    tableName: 'livros'
})
export class Livro extends Model<Livro>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string

    @Column({
        type: DataType.DECIMAL(10, 2)
    })
    preco: number
}
