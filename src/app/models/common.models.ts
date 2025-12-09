export interface IOptions {
    label: string;
    value: string | number;
}

export interface IExperience {
    company: string;
    endDate: string;
    startDate: string;
    tasks: string[];
    techs: string[];
    title: string;
}

export interface IProject {
    description: string;
    name: string;
    techs: string[];
    url: string;
}