
exports.URLS =  [
    {
      name: 'home',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com',
          wait:
            '#page-wrapper > div.main-container > div > ui-view > div.row.custom-panel-inputs.ng-scope > div > div:nth-child(1) > div:nth-child(2)'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/',
          wait:
            'body > div > ui-view > div > div > ui-view > div > div:nth-child(1) > div > div:nth-child(1)'
        }
      ]
    },
    {
      name: 'entity.axa_gie.overview',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/entity/55666dd66d62701e7c1d0000/overview',
          wait: '#background_graph_rect'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/entity/55666dd66d62701e7c1d0000/overview',
          wait: '#svgGraph'
        }
      ]
    },
    {
      name: 'entity.axa_gie.advanced',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/entity/55666dd66d62701e7c1d0000/advanced',
          wait: '#stackedAreaContainer > svg'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/entity/55666dd66d62701e7c1d0000/advanced',
          wait: '#stackedAreaContainer > svg'
        }
      ]
    },
    {
      name: 'entity.axa_gie.edit',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/entity/55666dd66d62701e7c1d0000/edit',
          wait: '#campaigntable'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/entity/55666dd66d62701e7c1d0000/campaigns',
          wait: 'body > div > ui-view > div > div > ui-view > ui-view > table'
        }
      ]
    },
  
    {
      name: 'group.axa_group_conso.overview',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/group/55cde4966238350081000000/overview',
          wait: '#background_graph_rect'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/group/55cde4966238350081000000/overview',
          wait: '#svgGraph'
        }
      ]
    },
  
    {
      name: 'group.axa_group_conso.overview',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/group/55cde4966238350081000000/advanced',
          wait: '#stackedAreaContainer > svg'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/group/55cde4966238350081000000/advanced',
          wait: '#stackedAreaContainer > svg'
        }
      ]
    },
  
    {
      name: 'group.axa_group_conso.mapping',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/group/55cde4966238350081000000/mapping',
          wait: '#mappingContainer > svg'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/group/55cde4966238350081000000/mapping',
          wait: '#mappingContainer > svg'
        }
      ]
    },
  
    {
      name: 'public',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/public',
          wait:
            '#page-wrapper > div.main-container.main-container-small > div > ui-view > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > div'
        },
        {
          env: 'staging',
          url: 'https://axamediatool-dev.herokuapp.com/#/public',
          wait:
            'body > div.container-fluid > ui-view > div > div > ui-view > ui-view > div > div > div:nth-child(1)'
        }
      ]
    },
    {
      name: 'public.bpt.uk',
      links: [
        {
          env: 'prod',
          url: 'https://mediadashtool.com/#/entity/55666dd96d62701e7c200000/bpt',
          wait: '#bpt-container'
        },
        {
          env: 'staging',
          url:
            'https://axamediatool-dev.herokuapp.com/#/public/entity/55666dd96d62701e7c200000/bpt',
          wait: '#bpt-container'
        }
      ]
    }
  ];