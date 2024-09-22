import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({
    tableName: 'activity'
})

class Activity extends Model {
    @Column({
        type: DataType.INTEGER
    })
    declare category: number

    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.INTEGER
    })
    declare calories: number    
}

export default Activity