export interface News {
  title: string;
  tag: string;
}

export interface NewsState {
  news: News[];
}

export const initialState: NewsState = { news: [] };
