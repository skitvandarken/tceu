export interface Vagas {
  id?: string;
  posicao: string;
  responsabilidades: string;
  departamento?: string;
  createdAt: Date | any;  // 'any' for Firestore timestamps
  updatedAt?: Date | any;
  imagevagaUrl?: string;
  emailDepartamento?: string;
}
