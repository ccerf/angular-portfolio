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
    url: string;
}

export interface IImg {
    src: string;
    alt: string;
}

export interface IProject {
    description: string;
    img: IImg;
    name: string;
    techs: string[];
    url: string;
}