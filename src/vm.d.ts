export interface IEvents {
    name: string;
    startDate: Date;
    endDate: Date;
    resource?: string;
    noOfDays?: number;
}

export interface IDictionary<Key, Value> {
    [key: Key]: Value;
}