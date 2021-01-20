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
                  buildHookId: '6007b838e3fa925bc32e8e71',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6wq8tji8',
                  apiId: 'ae57a769-13d1-4820-9b38-9620fea67a22'
                },
                {
                  buildHookId: '6007b8381b825856656ffc7a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ws248u9c',
                  apiId: 'af1caef5-17f4-4e24-bd80-7bf6ab33d43a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielCollins96/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ws248u9c.netlify.app', category: 'apps'}
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
