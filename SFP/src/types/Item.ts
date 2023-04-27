export type Item = {
  preventDefault(): unknown;
  target: any;
  date: Date;
  category: string;
  title: string;
  value: number;
}