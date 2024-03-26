import { StaticImageData } from "next/image";

export interface IEducation {
    startDate : number;
    endDate : number; 
    education : string; 
    course : string | null;
    description : string;
    graduatedFrom : string; 
    grade : string | number;
}

export interface IExperience {
    company : string; 
    startDate : string; 
    endDate : string; 
    experienceType : string; 
    description : string; 
    profile : string; 
}

export interface IProject {
    name : string; 
    imageUrl : StaticImageData | string; 
    description : string; 
    url : string; 
    github : string; 
    techStack : string; 
}