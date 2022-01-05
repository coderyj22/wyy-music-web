import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/discover/discover' },
    { path: '/discover', component: '@/pages/discover/discover' },
    { path: '/friend', component: '@/pages/friend/friend' },
  ],
  fastRefresh: {},
  //   history:{
  //   type:"hash"
  // }
});
