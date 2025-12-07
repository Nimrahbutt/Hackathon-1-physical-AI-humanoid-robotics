import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog', 'bf7'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/archive',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/archive', 'fe1'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/authors',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/authors', 'd93'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/authors/all-sebastien-lorber-articles', 'bde'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/authors/yangshun',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/authors/yangshun', 'e2d'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/first-blog-post',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/first-blog-post', '49c'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/long-blog-post',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/long-blog-post', 'caf'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/mdx-blog-post',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/mdx-blog-post', 'fc5'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/tags',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/tags', 'f4d'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/docusaurus',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/docusaurus', '396'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/facebook',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/facebook', '68e'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/hello',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/hello', 'ea1'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/hola',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/tags/hola', 'a18'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/blog/welcome',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/blog/welcome', '642'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/markdown-page',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/markdown-page', 'c81'),
    exact: true
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/docs',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs', '39d'),
    routes: [
      {
        path: '/Hackathon-1-physical-AI-humanoid-robotics/docs',
        component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs', 'dee'),
        routes: [
          {
            path: '/Hackathon-1-physical-AI-humanoid-robotics/docs',
            component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs', 'eb3'),
            routes: [
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/ch1-intro-physical-ai',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/ch1-intro-physical-ai', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/ch2-sensors',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/ch2-sensors', 'e28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/ch3-actuators',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/ch3-actuators', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/ch4-control-systems',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/ch4-control-systems', 'e21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/ch5-ros2-fundamentals',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/ch5-ros2-fundamentals', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/intro',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/intro', '095'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/congratulations', '2be'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-blog-post', '471'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-document', '3e8'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/create-a-page', 'e5f'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/deploy-your-site', '1fb'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-basics/markdown-features', '0a3'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-extras/manage-docs-versions', '723'),
                exact: true
              },
              {
                path: '/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/docs/tutorial-extras/translate-your-site', 'c3d'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Hackathon-1-physical-AI-humanoid-robotics/',
    component: ComponentCreator('/Hackathon-1-physical-AI-humanoid-robotics/', 'dcf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
