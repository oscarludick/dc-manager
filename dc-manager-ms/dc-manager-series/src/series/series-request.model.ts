export class SeriesRequestModel {
    serie: string;
    periocity: string;
    startDate: Date;
    endDate: Date;

    constructor(serie: string, periocity: string, startDate: Date, endDate: Date) {
        this.serie = serie;
        this.periocity = periocity;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    toString(): string {
        return JSON.stringify(this);
    }
}