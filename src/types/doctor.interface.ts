import { ISpecialty } from "./speciality.interface";

export interface IDoctor {
    id?: string;
    name: string;
    email: string;
    password: string;
    contactNumber: string;
    address?: string;
    registrationNumber: string;
    experience?: number;
    gender: "MALE" | "FEMALE";
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    specialities: string[]
    removeSpecialties?: string[];
    designation: string;
    profilePhoto?: File;
    isDeleted?: boolean;
    averageRating?: number;
    createdAt?: string;
    updatedAt?: string;
    doctorSpecialist?: Array<{
        specialitiesId?: string
        specialties?: {
            id: string;
            title: string;
            icon?: string;
        };
    }>;
}