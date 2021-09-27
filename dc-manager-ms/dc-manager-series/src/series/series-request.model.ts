export class SeriesRequestModel {
    id: any;
    serie: string;
    periocity: string;
    startDate: Date;
    endDate: Date;

    constructor(id: any = null, serie: string, periocity: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.serie = serie;
        this.periocity = periocity;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    toString(): string {
        return JSON.stringify(this);
    }
}