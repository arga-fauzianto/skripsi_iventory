const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        }
      ]
    },
    {
      id: 'utilities',
      title: 'Menu Master',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'component',
          title: 'Master Menu',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Master Barang',
              type: 'item',
              url: '/master-barang'
            },
            // {
            //   id: 'badges',
            //   title: 'Master User',
            //   type: 'item',
            //   url: '/basic/badges'
            // },
            {
              id: 'breadcrumb-pagination',
              title: 'Master Vendor',
              type: 'item',
              url: '/master-vendor'
            },
            // {
            //   id: 'collapse',
            //   title: 'Collapse',
            //   type: 'item',
            //   url: '/basic/collapse'
            // },
            // {
            //   id: 'typography',
            //   title: 'Typography',
            //   type: 'item',
            //   url: '/basic/typography'
            // },
            // {
            //   id: 'tooltip-popovers',
            //   title: 'Tooltip & Popovers',
            //   type: 'item',
            //   url: '/basic/tooltip-popovers'
            // }
          ]
        }
      ]
    },
    {
      id: 'auth',
      title: 'Menu Transaction',
      type: 'group',
      icon: 'icon-pages',
      children: [
        // {
        //   id: 'sign in',
        //   title: 'Login',
        //   type: 'item',
        //   icon: 'feather icon-lock',
        //   url: '/auth/signin-1',
        //   target: true,
        //   breadcrumbs: false
        // },
        {
          id: 'transaction-in',
          title: 'Transaksi Masuk',
          type: 'item',
          icon: 'feather icon-lock',
          url: '/auth/signin-1',
          target: true,
          breadcrumbs: false
        },
        {
          id: 'sign Up',
          title: 'Transaksi Keluar',
          type: 'item',
          icon: 'feather icon-log-in',
          url: '/auth/signup-1',
          target: true,
          breadcrumbs: false
        },
        // {
        //   id: 'reset-pass',
        //   title: 'Reset Password',
        //   type: 'item',
        //   icon: 'feather icon-unlock',
        //   url: '/auth/reset-password-1',
        //   target: true,
        //   breadcrumbs: false
        // }
      ]
    }
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: 'icon-support',
    //   children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   classes: 'nav-item',
        //   icon: 'feather icon-sidebar'
        // },
        // {
        //   id: 'documentation',
        //   title: 'Documentation',
        //   type: 'item',
        //   icon: 'feather icon-help-circle',
        //   classes: 'nav-item',
        //   url: 'https://codedthemes.gitbook.io/gradient-able-react/',
        //   target: true,
        //   external: true
        // }
      // ]
    // }
  ]
};

export default menuItems;
