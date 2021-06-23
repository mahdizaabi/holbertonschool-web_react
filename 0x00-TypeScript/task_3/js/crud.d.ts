import {RowElement,RowID } from './interface';


declare function insertRow(params: RowElement): number;
declare function deleteRow(params: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
