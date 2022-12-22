export interface NodeInfo<T> {
  dataType: T;
  isPosibleNull: boolean;
  isArray: {
    min: number;
    max: number;
  } | null;
}
