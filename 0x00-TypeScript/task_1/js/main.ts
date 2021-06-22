interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee:string;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}




