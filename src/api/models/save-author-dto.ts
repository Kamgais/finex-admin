export interface SaveAuthorDTO {
    id?: number;
    name: string;
    description: string;
    birthDate: string; // Use ISO 8601 format (e.g., "YYYY-MM-DD")
    email: string;
    phone: string;
    nationality: string; // Default: "Cameroun"
    gender: "Masculin" | "Féminin"; // Use union type for gender
    photo: string | null; // Use string for photo URL or null if no photo
  
}