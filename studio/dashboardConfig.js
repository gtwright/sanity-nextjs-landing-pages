export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eab8019c03268c1e95a4b9a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hitcri63',
                  apiId: 'e8558722-174b-4831-b950-a81f2d29631d'
                },
                {
                  buildHookId: '5eab801ac03268be765a4ba6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k7nrjgkb',
                  apiId: 'ae6b57c4-126f-4588-a30d-d837c3ca433c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gtwright/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k7nrjgkb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
