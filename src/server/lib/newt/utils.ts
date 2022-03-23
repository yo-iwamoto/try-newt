export const NEWT_APP_UID = 'blog';

/** 指定した fields に _id を追加 */
export const selectFields = <T>(fields: (keyof T)[] = []) => ['_id', ...fields];

/** Pick して { _id: string } を付加 */
export type PickedFieldsWithId<T, U extends (keyof T)[][number]> = Pick<T, U> & { _id: string };
