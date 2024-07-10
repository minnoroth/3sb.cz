import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
// Custom components
import Blog from './components/blog/Blog.vue';
import Post from './components/blog/Post.vue';
import PostHeader from './components/blog/PostHeader.vue';
import Sponsors from './components/Sponsors.vue';
// Custom styles
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Blog', Blog);
    app.component('Post', Post);
    app.component('PostHeader', PostHeader);
    app.component('Sponsors', Sponsors);
  }
};
