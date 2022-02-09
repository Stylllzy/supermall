<template>
  <div id="profile">
    <van-nav-bar title="商城" class="nav-bar"/>
    <div class="use_info">
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                size="70"/>
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="@/assets/img/profile/phone.svg" alt="">
        暂无绑定手机号
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Profile",
  components: {

  },
  data() {
    return {
      art_count: 0,
      follow_count: 1,
      fans_count: 0
    }
  }

}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
  height: 100%;
}

.nav-bar {
  background-color: #FF8198FF;
}

::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: #e3e3e3;
}

.use_info {
  background-color: #FF8198FF;
  height: 90px;
}
::v-deep .van-icon__image {
  color: #666666;
  padding: 0;
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
}
.login {
  color: #e3e3e3;
  float: left;
}
.phone {
  color: #e3e3e3;
  float: left;
}
.phone img {
  height: 20px;
  width: 20px;
}


</style>
