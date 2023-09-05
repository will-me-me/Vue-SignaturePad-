<template>
  <v-container fluid class="d-flex align-center justify-center mt-12">
    <v-card outlined width="500">
      <v-card-text class="d-flex align-center justify-center">
        <VueSignaturePad
          height="300px"
          width="450px"
          ref="signaturePad"
          :options="computedPenColor"
          id="signature"
        />
      </v-card-text>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-card-actions class="d-flex">
        <v-btn
          @click="undo"
          color="primary"
          outlined
          rounded
          small
          depressed
          text
          >Clear
          <v-icon right dark> mdi-delete-empty </v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          color="success"
          @click="save"
          outlined
          rounded
          small
          depressed
          text
        >
          save
          <v-icon right dark> mdi-content-save-all </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
  name: "HelloWorld",

  data: () => ({
    selectedColor: "#000000", // Default pen color (black)
  }),
  computed: {
    computedPenColor() {
      const options = {
        penColor: this.selectedColor,
      };
      return options;
    },
  },
  methods: {
    toData() {
      // Access the signature pad component and set the pen color
      // this.$refs.signaturePad.({ penColor: this.penColor });
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    },
  },
};
</script>
<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
