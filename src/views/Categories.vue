<template>
  <div class="d-flex">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="10"
      >
        <div class="d-flex">
          <div class="dot mt-1 mr-1"></div>
          <span class="mb-2">Create</span>
        </div>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter name"
              required
            ></v-text-field>
            <v-text-field
              label="Limit"
              placeholder="Select..."
              type='number'
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="10"
      >
        <div class="d-flex">
          <div class="dot mt-1 mr-1"></div>
          <span class="mb-2">Edit</span>
        </div>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter name"
              required
            ></v-text-field>
            <v-text-field
              label="Limit"
              placeholder="Select..."
              type="number"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">Refresh</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.dot {
  background-color: blue;
  height: 12px;
  width: 12px;
  border-radius: 50%;
}
</style>