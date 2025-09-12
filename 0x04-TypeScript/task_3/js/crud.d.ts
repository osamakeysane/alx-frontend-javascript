// task_3/js/crud.d.ts
import { RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: number): void;
declare function updateRow(rowId: number, row: RowElement): number;
