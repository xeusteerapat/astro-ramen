export interface RootRamen {
  ramens: RamenShops;
}

export interface RamenShops {
  shops: Shop[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface RamenCardProps {
  ramen: Shop;
}

export interface Shop {
  id: string;
  name: string;
  photos: Photo[];
}

export interface Photo {
  name: string;
  width: number;
  height: number;
  authorId: string;
  url: string;
}

export interface PageInfo {
  nextPage: number;
  prevPage: any;
  lastPage: number;
  perPage: number;
  currentPage: number;
}
