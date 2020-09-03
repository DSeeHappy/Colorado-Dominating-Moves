export default function getMenuData() {
  return [
    {
      title: 'Widgets',
      key: 'widgets',
      count: '99+',
      url: '/widgets/general',
      children: [
        {
          title: 'General',
          key: 'widgetsGeneral',
          url: '/widgets/general',
        },
        {
          title: 'Lists',
          key: 'widgetsLists',
          url: '/widgets/lists',
        },
        {
          title: 'Tables',
          key: 'widgetsTables',
          url: '/widgets/tables',
        },
        {
          title: 'Charts',
          key: 'widgetsCharts',
          url: '/widgets/charts',
        },
      ],
    },
    {
      title: 'Cards',
      key: 'cards',
      url: '/cards/basic-cards',
      children: [
        {
          title: 'Basic Cards',
          key: 'cardsBasicCards',
          url: '/cards/basic-cards',
        },
        {
          title: 'Tabbed Cards',
          key: 'cardsTabbedCards',
          url: '/cards/tabbed-cards',
        },
      ],
    },
    {
      title: 'Apps',
      key: 'apps',
      count: '17+',
      url: '/apps/calendar',
      children: [
        {
          title: 'Calendar',
          key: 'appsCalendar',
          url: '/apps/calendar',
        },
        {
          title: 'DigitalOcean Create',
          key: 'appsDigitalOceanCreate',
          url: '/apps/digitalocean-create',
        },
        {
          title: 'DigitalOcean Droplets',
          key: 'appsDigitalOceanDroplets',
          url: '/apps/digitalocean-droplets',
        },
        {
          title: 'Gallery',
          key: 'appsGallery',
          url: '/apps/gallery',
        },
        {
          title: 'Github Discuss',
          key: 'appsGithubDiscuss',
          url: '/apps/github-discuss',
        },
        {
          title: 'Github Explore',
          key: 'appsGithubExplore',
          url: '/apps/github-explore',
        },
        {
          title: 'Google Analytics',
          key: 'appsGoogleAnalytics',
          url: '/apps/google-analytics',
        },
        {
          title: 'Helpdesk',
          key: 'appsHelpdesk',
          url: '/apps/helpdesk-dashboard',
        },
        {
          title: 'Jira Agile Board',
          key: 'appsJiraAgileBoard',
          url: '/apps/jira-agile-board',
        },
        {
          title: 'Jira Dashboard',
          key: 'appsJiraDashboard',
          url: '/apps/jira-dashboard',
        },
        {
          title: 'Mail',
          key: 'appsMail',
          url: '/apps/mail',
        },
        {
          title: 'Messaging',
          key: 'appsMessaging',
          url: '/apps/messaging',
        },
        {
          title: 'Profile',
          key: 'appsProfile',
          url: '/apps/profile',
        },
        {
          title: 'Todoist',
          key: 'appsTodoist',
          url: '/apps/todoist-list',
        },
        {
          title: 'Wordpress Add',
          key: 'appsWordpressAdd',
          url: '/apps/wordpress-add',
        },
        {
          title: 'Wordpress Post',
          key: 'appsWordpressPost',
          url: '/apps/wordpress-post',
        },
        {
          title: 'Wordpress Posts',
          key: 'appsWordpressPosts',
          url: '/apps/wordpress-posts',
        },
      ],
    },
    {
      title: 'Ant Design',
      key: 'antDesign',
      count: '54',
      url: '/ui-kits/antd',
    },
    {
      title: 'Bootstrap',
      key: 'bootstrap',
      count: '28',
      url: '/ui-kits/bootstrap',
    },
    {
      title: 'Tables',
      key: 'tables',
      count: '2',
      url: '/tables/antd',
      children: [
        {
          title: 'Ant Design',
          key: 'tablesAntd',
          url: '/tables/antd',
        },
        {
          title: 'Bootstrap',
          key: 'tablesBootstrap',
          url: '/tables/bootstrap',
        },
      ],
    },
    {
      title: 'Charts',
      key: 'charts',
      count: '3',
      url: '/charts/chartistjs',
      children: [
        {
          title: 'Chartist.js',
          key: 'chartsChartistjs',
          url: '/charts/chartistjs',
        },
        {
          title: 'Chart.js',
          key: 'chartsChartjs',
          url: '/charts/chartjs',
        },
        {
          title: 'C3',
          key: 'chartsC3',
          url: '/charts/c3',
        },
      ],
    },
    {
      title: 'Icons',
      key: 'icons',
      count: '4',
      url: '/icons/feather-icons',
      children: [
        {
          title: 'Feather Icons',
          key: 'iconsFeatherIcons',
          url: '/icons/feather-icons',
        },
        {
          title: 'Fontawesome',
          key: 'iconsFontawesome',
          url: '/icons/fontawesome',
        },
        {
          title: 'Linearicons Free',
          key: 'iconsLineariconsFree',
          url: '/icons/linearicons-free',
        },
        {
          title: 'Icomoon Free',
          key: 'iconsIcomoonFree',
          url: '/icons/icomoon-free',
        },
      ],
    },
    {
      title: 'Advanced',
      key: 'advanced',
      url: '/advanced/form-examples',
      children: [
        {
          title: 'Form Examples',
          key: 'formExamples',
          url: '/advanced/form-examples',
        },
        {
          title: 'Email Templates',
          key: 'emailTemplates',
          url: '/advanced/email-templates',
        },
        {
          title: 'Pricing Tables',
          key: 'pricingTables',
          url: '/advanced/pricing-tables',
        },
        {
          title: 'Invoice',
          key: 'invoice',
          url: '/advanced/invoice',
        },
        {
          title: 'Grid',
          key: 'grid',
          url: '/advanced/grid',
        },
        {
          title: 'Typography',
          key: 'typography',
          url: '/advanced/typography',
        },
        {
          title: 'Utilities',
          key: 'utilities',
          url: '/advanced/utilities',
        },
        {
          title: 'Colors',
          key: 'colors',
          url: '/advanced/colors',
        },
      ],
    },
  ]
}
