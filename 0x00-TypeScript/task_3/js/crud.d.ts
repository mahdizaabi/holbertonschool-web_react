import {RowElement,RowID } from './interfaces';


declare function insertRow(params: RowElement): number;
declare function deleteRow(params: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
