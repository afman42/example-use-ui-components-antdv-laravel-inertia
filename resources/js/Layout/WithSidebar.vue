<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <a-layout-sider
            breakpoint="lg"
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <div class="logo" />
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
                id="dddddd"
                v-model:openKeys="openKeys"
                :items="items"
                @click="handleClickRoute"
            >
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header
                style="
                    background: #fff;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                    padding: 0px 10px;
                "
            >
                <div style="display: flex; align-items: center">
                    <div style="margin-right: 10px">
                        <menu-unfold-outlined
                            v-if="collapsed"
                            class="trigger"
                            @click="() => (collapsed = !collapsed)"
                        />
                        <menu-fold-outlined
                            v-else
                            class="trigger"
                            @click="() => (collapsed = !collapsed)"
                        />
                    </div>
                    <div>
                        <a-form
                            name="basic"
                            autocomplete="off"
                            layout="inline"
                            :wrapper-col="{ span: '24' }"
                        >
                            <a-form-item :wrapper-col="{ span: '24' }">
                                <a-input
                                    v-model:value="formState.search"
                                    placeholder="Search"
                                >
                                    <template #prefix>
                                        <SearchOutlined />
                                    </template>
                                </a-input>
                            </a-form-item>
                        </a-form>
                    </div>
                </div>
                <AvatarDropdown />
            </a-layout-header>
            <slot />
        </a-layout>
    </a-layout>
</template>
<script setup>
import { ref } from "vue";
import AvatarDropdown from "../Components/AvatarDropdown.vue";
import { items, selectedKeys, openKeys } from "../data/menuItems";
import { router } from "@inertiajs/vue3";
const collapsed = ref(false);
const formState = ref({
    search: "",
});
const handleClickRoute = (e) => {
    window.localStorage.setItem("setSelectedMenu", e.key);
    selectedKeys.value = [window.localStorage.getItem("setSelectedMenu")];
    router.visit(e.item.route);
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
