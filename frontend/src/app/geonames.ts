export interface IGeoName {
    hits: any;
    _source: any;
    id: number;
    name: string;
    ascii: string;
    altname: string;
    lat: number;
    long: number;
    featclass: string;
    featcode: string;
    country: string;
    cc2: string;
    admin1: string;
    admin2: string;
    admin3: string;
    admin4: string;
    gotopo30: number;
    population: number;
    elevation: number;
    dem: number;
    tz: string;
}
