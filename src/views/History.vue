<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Data</th>
            <th class="text-left">Categoria</th>
            <th class="text-left">Type</th>
            <th class="text-left">Open</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item , index) in desserts"
            :key="index"
          >
            <td>{{ index+1 }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>
              <v-btn>Open</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <v-btn
        class="mx-1 mt-3"
        color="primary"
        fab
        small
        dark
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          count: 1,
          calories: 112,
          data: new Date(),
          name: 'name',
          type: 'consumption',
        },
        {
          count: 2,
          calories: 12212,
          data: new Date(),
          name: 'name',
          type: 'consumption',
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.desserts.data = new Date();
    }, 1000);
  },
};
</script>

<style lang="scss">
</style>