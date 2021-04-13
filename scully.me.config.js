'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
exports.config = {
  projectRoot: './apps/me/src',
  projectName: 'me',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog-posts',
      },
    },
  },
};
