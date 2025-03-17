export {};
declare global {
	export type DataTableHeader<T = string> =
		| string
		| {
				label: string;
				key?: T | ({} & string);
				slot?: string;
				sortable?: boolean;
				props?: Record<string, unknown>;
		  };
	export type DataTableHeaders<T> = DataTableHeader<T>[];
}
