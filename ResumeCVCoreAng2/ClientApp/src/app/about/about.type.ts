export class CertListType {
    public certTit: string;
    public certDesc: string;
    public certLink: string;
}

export class CertificationType {
    public certificTit: string;
    public certific: Array<CertListType>;
}

export class SkillListType {
    public skillTit: string;
    public skillVal: number;
}

export class SkillType {
    public skillsTit: string;
    public skillsLeft: Array<SkillListType>;
    public skillsRight: Array<SkillListType>;
}

export class AboutType {
    public aboutTit: string;
    public fullNameTit: string;
    public birthdateTit: string;
    public birthdate: string;
    public addressTit: string;
    public address: string;
    public cert: CertificationType;
    public skills: SkillType;
}