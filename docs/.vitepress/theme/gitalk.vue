<!--.vitepress/theme/MyLayout.vue-->
<template>
  <Layout>
    <template #doc-after>
      <div class="comment-container"></div>
    </template>
  </Layout>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';

const { Layout } = DefaultTheme;

const route = useRoute();

const emptyNode = (node) => {
  //循环删除子元素，一直删除第一个子元素直到没有子元素即为清空
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
};

const initGitalk = () => {
  if (typeof window !== undefined) {
    const s_div = document.createElement('div'); // 创建节点
    s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
    const container = document.querySelector('.comment-container'); // querySelector的节点可自己根据自己想加载的地方设置
    if (container) {
      emptyNode(container);
      container.appendChild(s_div);
      const gitment = new Gitalk({
        owner: "Lisk809", // GitHub repository 所有者
        repo: "https://github.com/Lisk809/Lisk", // GitHub repository
        clientID: "10683ff3f803712d82c8", // 自己的clientID
        clientSecret: "fdb6ee0c92eff74124cb0fec4cb9924c7131b811", // 自己的clientSecret
        admin: ['Lisk809'],
        labels: [{ name: "Gitalk" }],
        createIssueManually: true,
        proxy: "https://vercel.younglina.top/github_access_token",
      });
      gitment.render('gitalk-page-container');
    }
  }
};
onMounted(initGitalk);

watch(
  () => route.path,
  () => {
    initGitalk();
  }
);
</script>
