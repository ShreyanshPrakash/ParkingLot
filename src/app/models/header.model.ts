

export interface HeaderModel {
    logo: string;
    nav: Array<NavModel>;
}

export interface NavModel {
    title: string;
    routerLink: string;
}