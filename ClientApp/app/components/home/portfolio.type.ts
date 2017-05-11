export class ProjectsListType {
    public projectImage: string;
    public projectTit: string;
}

export class PortfolioType {
    public portfolioTit: string;
    public pathImages: string;
    public projects: Array<ProjectsListType>;
}