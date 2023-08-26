import {
    AppstoreOutlined,
    LoginOutlined,
    DashboardOutlined,
} from "@ant-design/icons-vue";
import { reactive, ref, h } from "vue";

export const selectedKeys = ref(
    [window.localStorage.getItem("setSelectedMenu")] || ["1"]
);
export const openKeys = ref(["sub1"]);

function getItem(label, key, icon, children, type, route) {
    return {
        key,
        icon,
        children,
        label,
        type,
        route,
    };
}

export const items = reactive([
    getItem("Home", "1", h(DashboardOutlined), null, null, "/"),

    getItem(
        "UI Element",
        "2",
        () => h(AppstoreOutlined),
        [
            getItem("Button", "sub21", null, null, null, "/ui/button"),
            getItem("Form", "sub22", null, null, null, "/ui/form"),
            getItem("Submenu", "sub3", null, [
                getItem("Option 7", "7"),
                getItem("Option 8", "8"),
            ]),
        ],
        null,
        null
    ),

    // { type: "divider" },

    getItem("Login", "3", h(LoginOutlined), null, null, "/login"),
]);
