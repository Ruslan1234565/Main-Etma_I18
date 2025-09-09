export interface UserProps {
    id: string;
    name: string;
    phone?: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}