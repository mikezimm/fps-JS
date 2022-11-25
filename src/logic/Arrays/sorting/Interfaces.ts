

  export type ISeriesSort = 'asis' | 'labels' | 'asc' | 'dec' | string | null ;

  export interface ISeriesSortObject {
    // [key: string]: string | ISeriesSort ;
    prop: string;
    order: ISeriesSort;
  }
