export interface SectionDataItem<T> {
  title: string;
  data: T[];
}

export interface SectionDataItemWithTotal<T> extends SectionDataItem<T> {
  total: number;
}

export type SectionData<T> = SectionDataItem<T>[];

export type SectionDataWithTotal<T> = SectionDataItemWithTotal<T>[];
