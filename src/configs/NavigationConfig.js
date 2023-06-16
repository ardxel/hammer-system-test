import {
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'основные',
    path: `${ APP_PREFIX_PATH }/`,
    title: 'основные',
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'goods',
            path: `${APP_PREFIX_PATH}/catalog/goods`,
            title: 'товары',
            submenu: [],
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: 'категории',
            submenu: [],
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: 'коллекции',
            submenu: [],
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: 'комбо',
            submenu: [],
          }
        ]
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'users',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'user_list',
            path: `${APP_PREFIX_PATH}/users/user-list`,
            title: 'Список клиентов',
            submenu: [],
          },
          {
            key: 'user_groups',
            path: `${APP_PREFIX_PATH}/users/user-groups`,
            title: 'Группы клиентов',
            submenu: [],
          }
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'Баннеры',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promo',
        path: `${APP_PREFIX_PATH}/promo`,
        title: 'Промо',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offline_geo',
        path: `${APP_PREFIX_PATH}/offline_geo`,
        title: 'Оффлайн точки',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'addresses',
            path: `${APP_PREFIX_PATH}/offline_geo/addresses`,
            title: 'Адреса',
            submenu: [],
          },
          {
            key: 'geo_zones',
            path: `${APP_PREFIX_PATH}/offline_geo/geo-zones`,
            title: 'Геозоны',
            submenu: [],
          }
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'Сотрудники',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mail',
        path: `${APP_PREFIX_PATH}/mail`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      },
    ],
  },
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'Системные',
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        submenu: [],
      },
      {
        key: 'mobile_app',
        path: `${APP_PREFIX_PATH}/system/mobile_app`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        submenu: [],
      },
    ],
  }

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
