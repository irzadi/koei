import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aa9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '216'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '388'),
            routes: [
              {
                path: '/docs/Austria/Austrian Agencies',
                component: ComponentCreator('/docs/Austria/Austrian Agencies', '0c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Background',
                component: ComponentCreator('/docs/Austria/Background', '672'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Documents Required',
                component: ComponentCreator('/docs/Austria/Documents Required', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Helpful Websites and Links',
                component: ComponentCreator('/docs/Austria/Helpful Websites and Links', '4de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Legal Foundation',
                component: ComponentCreator('/docs/Austria/Legal Foundation', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/List of Mangelberufe',
                component: ComponentCreator('/docs/Austria/List of Mangelberufe', '0ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Migrating to Austria',
                component: ComponentCreator('/docs/Austria/Migrating to Austria', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Points Calculator',
                component: ComponentCreator('/docs/Austria/Points Calculator', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Austria/Workflow',
                component: ComponentCreator('/docs/Austria/Workflow', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Germany/Doctors',
                component: ComponentCreator('/docs/Germany/Doctors', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
