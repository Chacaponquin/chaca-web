export interface NodeInfo<T> {
  dataType: T;
  isPosibleNull: number;
  isArray: {
    min: number;
    max: number;
  } | null;
}
