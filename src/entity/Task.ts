import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true, length: 100 })
  descricao: string;

  @Column({ type: "boolean", default: false })
  finalizada: Boolean;

  @Column({ type: "timestamptz" })
  dataFinalizada: Date;

  @Column({ type: "varchar", length: 300, nullable: true })
  descricaoComplementar: string | null;
}
