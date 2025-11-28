export interface IThing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: 'open' | 'closed';
  countActive: number;
}

export interface ISortedThing {
  status: 'open' | 'closed' | 'both';
  list: IThing[];
}
