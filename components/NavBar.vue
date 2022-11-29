<script setup>
import { NButton, NIcon, NDropdown,NAvatar } from 'naive-ui';
import { Search } from '@vicons/ionicons5';
const login = () => {
  console.log(123)
}
const userOptions = [
  {
    label: "用户中心",
    key: "center",
  },
  {
    label: "退出",
    key: "logout",
  }
]
</script>

<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button type="primary" size="medium">生意猫教育网站</n-button>
        <div class="menu">
          <div class="menu-item menu-item-active">分类</div>
          <div class="menu-item" v-for="i in 8" :key="i">分类{{ i }}</div>
        </div>
        <n-button circle class="ml-auto mr-3" >
          <template #icon>
            <n-icon>
              <Search />
            </n-icon>
          </template>
        </n-button>
        <!-- <n-button type="primary" size="medium" @click="login">登录</n-button> -->
        <n-dropdown :options="userOptions">
          <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </n-dropdown>


      </div>
    </div>
    <div class="w-[100%] h-[80px]"></div>
  </div>
</template>

<style lang="postcss" scoped>
.navbar {
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
.menu{
  @apply flex items-center px-4;
}
.menu-item{
  transition: all .2s;
  @apply px-2 py-1 mx-1 hover:(bg-blue-50 text-blue-700) rounded active:(!bg-blue-100 );
}
.menu-item-active{
  @apply !bg-blue-150 !text-blue-900;
}
</style>