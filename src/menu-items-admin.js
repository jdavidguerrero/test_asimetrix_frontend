export default {
    items: [
        {
            id: 'menu',
            title: 'Menus',
            type: 'group',
            icon: 'icon-pages',
            children: [
                

                {
                    id: 'cliente',
                    title: 'Clientes',
                    type: 'collapse',
                    icon: 'feather icon-tablet',
                    children: [
                        {
                            id: 'crear_clientes',
                            title: 'Ingreso',
                            type: 'item',
                            url: '/clientes/ingreso'
                        },
                        {
                            id: 'listar_clientes',
                            title: 'Listado',
                            type: 'item',
                            url: '/clientes/listado'
                        },
                    ]
                },
                {
                    id: 'logout',
                    title: 'Logout',
                    type: 'item',
                    url: '/logout',
                    icon: 'feather icon-power',
                },
                /* {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                } */
            ]
        }
    ]
    
}