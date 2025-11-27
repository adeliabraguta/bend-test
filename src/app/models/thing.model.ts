export interface IThing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}
