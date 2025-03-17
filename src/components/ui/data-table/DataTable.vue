<script setup lang="ts" generic="TData, TValue">
import { FlexRender, getCoreRowModel, useVueTable, type ColumnDef } from '@tanstack/vue-table'

const props = withDefaults(
  defineProps<{
    data: TData[]
    columns: ColumnDef<TData, TValue>[]
  }>(),
  {},
)
const router = useRouter()
const sortColumn = (key: string, sortType: 'asc' | 'desc') => {
  router.replace({
    query: {
      sort: `${key}-${sortType ?? 'asc'}`,
    },
  })
}

const table = useVueTable({
  get data() {
    return props.data ?? []
  },
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="">
    <Table>
      <TableHeader>
        <template v-for="headersGroup in table.getHeaderGroups()" :key="headersGroup.id">
          <TableRow>
            <template v-for="header in headersGroup.headers" :key="header.id">
              <TableHead :colSpan="header.colSpan">
                <div class="flex items-center gap-2">
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                  <div class="grid" v-if="header.column.columnDef.enableSorting">
                    <Button
                      :icon="'i-radix-icons-chevron-up'"
                      size="icon-sm"
                      :variant="$route.query.sort?.includes(`${header.id}-asc`) ? 'soft' : 'ghost'"
                      class="size-3"
                      @click="sortColumn(header.id, 'asc')"
                    />
                    <Button
                      :icon="'i-radix-icons-chevron-down'"
                      size="icon-sm"
                      :variant="$route.query.sort?.includes(`${header.id}-desc`) ? 'soft' : 'ghost'"
                      @click="sortColumn(header.id, 'desc')"
                      class="size-3"
                    />
                  </div>
                </div>
              </TableHead>
            </template>
          </TableRow>
        </template>
      </TableHeader>
      <TableBody>
        <TableRow class="bg-primary-50" v-if="$slots['create-form']">
          <TableCell
            :colspan="
              table
                .getHeaderGroups()
                ?.map((hg) => hg.headers.length)
                .reduce((a, b) => a + b, 0)
            "
          >
          </TableCell>
        </TableRow>
        <template v-else-if="table.getRowModel().rows?.length">
          <template v-for="row in table.getRowModel().rows" :key="row.id">
            <TableRow :data-state="row.getIsSelected() && 'selected'">
              <DataTableCell :row="row" />
            </TableRow>
          </template>
        </template>
        <TableEmpty
          v-else
          :colspan="
            table
              .getHeaderGroups()
              ?.map((hg) => hg.headers.length)
              .reduce((a, b) => a + b, 0)
          "
        >
          <slot name="empty" />
        </TableEmpty>
      </TableBody>
    </Table>
  </div>
</template>

<style></style>
