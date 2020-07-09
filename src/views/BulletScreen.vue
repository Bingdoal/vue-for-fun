<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1>彈幕測試</h1>
    </v-row>
    <v-row align="end">
      <v-textarea label="發彈幕" v-model.trim="message"></v-textarea>
      <v-btn @click="submitMsg">送出</v-btn>
    </v-row>
    <transition-group name="flypass" tag="div">
      <div
        v-for="bullet in bullets"
        :key="bullet.id"
        :style="{ top: bullet.top + 'px' }"
        class="bullet"
      >
        {{ bullet.msg }}
      </div>
    </transition-group>
  </v-container>
</template>

<script>
export default {
  name: "BulletScreen",
  data() {
    return {
      message: null,
      bullets: [],
      bulletMsg: null
    };
  },
  sockets: {
    connect() {
      console.log("socket connecting!");
    },
    receiveBulletScreen(obj) {
      this.shotBulletScreen(obj);
    }
  },
  methods: {
    submitMsg() {
      this.$socket.emit("sendBulletScreen", {
        msg: this.message
      });
      this.message = null;
    },
    shotBulletScreen(obj) {
      obj["top"] = Math.random() * 50 + 50;
      this.bullets.push(obj);
      let self = this;
      setTimeout(() => {
        let index = self.bullets.indexOf(obj);
        self.bullets.splice(index, 1);
      }, 6000);
    }
  }
};
</script>

<style lang="scss" scoped>
.bullet {
  position: fixed;
  top: 100px;
  left: 0;
}
.flypass-enter {
}
.flypass-enter-active {
  transition: all 6s;
}
.flypass-enter-to {
  left: 150%;
}
</style>
