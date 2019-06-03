export class EducationListType {
    public edYears: string;
    public edCollege: string;
    public edTit: string;
    public edPlace: string;
    public edDescription: string;
}

export class EducationType {
    public educationTit: string;
    public educations: Array<EducationListType>;
}