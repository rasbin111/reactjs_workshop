import { Table } from '@mantine/core';
import {
    createSortedRowModel,
    tableFeatures,
    rowSortingFeature,
    columnFilteringFeature,
    sortFns,
    useTable,
    createFilteredRowModel,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type Person = {
    firstName: string
    lastName: string
    age: number
}

const data: Array<Person> = [
    { firstName: 'samir', lastName: 'thapa', age: 30 },
    { firstName: 'tanner', lastName: 'linsley', age: 24 },
    { firstName: 'tandy', lastName: 'miller', age: 40 },
    { firstName: 'joe', lastName: 'dirte', age: 45 },
];

const features = tableFeatures({
    rowSortingFeature,
    columnFilteringFeature,
    filteredRowModel: createFilteredRowModel(),
    sortedRowModel: createSortedRowModel(),
    sortFns,
});

const columns: Array<ColumnDef<typeof features, Person>> = [
    {
        accessorKey: "firstName",
        header: "First Name",
        cell: (info) => info.getValue(),
    },
    {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        header: () => <span> Last Name </span>,
        cell: (info) => <i> {info.getValue<string>()}</i>
    },
    {
        accessorKey: 'age',
        header: () => "Age",
    }

];


const PersonTable = () => {
    const table = useTable({
        key: 'person-table',
        features,
        columns,
        data,
    });
    return (<Table>
        <Table.Thead>
            {
                table.getHeaderGroups().map(headerGroup => {
                    return (<Table.Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (<Table.Th key={header.id}>
                                {header.isPlaceholder ? null : (
                                    <div style={{
                                        cursor: header.column.getCanSort()
                                            ? 'pointer'
                                            : undefined,
                                    }}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        <table.FlexRender header={header} />
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                )}
                            </Table.Th>)
                        })}
                    </Table.Tr>)
                })
            }
        </Table.Thead>
        <Table.Tbody>

            {
                table.getRowModel().rows.map(row => {
                    return (<Table.Tr key={row.id}>
                        {
                            row.getAllCells().map(cell => {
                                return (<Table.Td key={cell.id}>
                                    <table.FlexRender cell={cell} />
                                </Table.Td>)
                            })
                        }
                    </Table.Tr>);
                })
            }
        </Table.Tbody>
    </Table>);
}

export default PersonTable;
