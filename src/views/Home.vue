<template>
  <div>
    <div class="d-flex">
      <span class="ml-2 mt-2">Bill:</span>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="mr-2 mt-2 mb-2"
      >Refresh</v-btn>
    </div>

    <div class='d-flex justify-space-around flex-wrap'>
      <v-card
        width="500"
        min-height="200"
        outlined
      >
        <v-list-item
          three-line
          class="d-flex flex-column"
        >
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">Сurrency account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-text-field
          label="Bill"
          single-line
          outlined
        ></v-text-field>
      </v-card>
      <v-card
        max-width="500"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">Exchange rate</v-list-item-title>
          </v-list-item-content>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Currency</th>
                  <th class="text-left">Cours</th>
                  <th class="text-left">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item) in desserts"
                  :key="item.name"
                >
                  <td>{{ item.currency }}</td>
                  <td>{{ item.cours }}</td>
                  <td>{{ item.data }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          currency: '$',
          cours: 112,
          data: new Date(),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>