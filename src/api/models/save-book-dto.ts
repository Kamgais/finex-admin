export interface SaveBookDTO {
    id?: number; // Optionnel pour un nouvel livre
    title: string;
    description: string;
    category: string;
    language: string;
    image: File | null; // Pour gérer les fichiers d'image
    status: string;
    niveau: string;
    pub_date: string;
    price_n: string;
    price_p: string;
    user_id: string;
    author_id: string;
}