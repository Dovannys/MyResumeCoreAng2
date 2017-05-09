export class ExperienceListType {
    public exYears: string;
    public exCompany: string;
    public exTit: string;
    public exPlace: string;
    public exDescription: string;
}

export class ExperienceType {
    public experienceTit: string;
    public experiences: Array<ExperienceListType>;
}