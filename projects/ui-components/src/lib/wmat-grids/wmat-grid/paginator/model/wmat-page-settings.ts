export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SETTINGS: WmatPageSettings = {
  pageSize: 10,
  pageSizeOptions: [5, 10, 20],
  showFirstLastButtons: true
}

export interface WmatPageSettings {
  pageSize: number;
  pageSizeOptions: number[];
  showFirstLastButtons: boolean;
}

