import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import "ant-design-vue/dist/reset.css";
import LayoutSide from "./Layout/WithSidebar.vue";
import {
    DownOutlined,
    LockOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
    AppstoreOutlined,
    LoginOutlined,
    DashboardOutlined,
} from "@ant-design/icons-vue";

import {
    LayoutContent,
    Row,
    Space,
    Button,
    Col,
    Tooltip,
    Card,
    Form,
    FormItem,
    Layout,
    Menu,
    LayoutHeader,
    LayoutSider,
    Dropdown,
    MenuItem,
    Input,
} from "ant-design-vue";
createInertiaApp({
    progress: {
        color: "#29d",
    },
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || LayoutSide;
        return page;
    },
    setup({ el, App, props }) {
        createApp({ render: () => h(App, props) })
            .component("a-layout-content", LayoutContent)
            .component("a-row", Row)
            .component("a-space", Space)
            .component("a-button", Button)
            .component("a-col", Col)
            .component("a-tooltip", Tooltip)
            .component("a-card", Card)
            .component("a-form", Form)
            .component("a-form-item", FormItem)
            .component("a-layout", Layout)
            .component("a-menu", Menu)
            .component("a-layout-header", LayoutHeader)
            .component("a-layout-sider", LayoutSider)
            .component("a-dropdown", Dropdown)
            .component("a-menu-item", MenuItem)
            .component("a-input", Input)
            .component("DownOutlined", DownOutlined)
            .component("LockOutlined", LockOutlined)
            .component("UserOutlined", UserOutlined)
            .component("MenuUnfoldOutlined", MenuUnfoldOutlined)
            .component("MenuFoldOutlined", MenuFoldOutlined)
            .component("SearchOutlined", SearchOutlined)
            .mount(el);
    },
});
