//interface pour le hook de la table
export interface ItemsTable {
  name: string;
  desc: string;
  price: number;
  id?: string;
}

//interface qui récupère l'interface ItemsTable surlaquelle est basé le hook Table
export interface AddTableProps {
  entries: ItemsTable[];
  onDelete: (id: string) => void;
}

export interface FormProps {
  onSubmit: (formData: ItemsTable) => void;
}

export interface TotalProps {
  entries: ItemsTable[];
}
