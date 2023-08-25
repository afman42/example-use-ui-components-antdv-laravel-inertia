<template>
    <a-dropdown>
        <a @click.prevent>
            <img src="/img/john-doe.jpg" style="width: 20px; height: 20px" />
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <a-menu-item key="1" :disabled="true"> John Doe </a-menu-item>
                <a-menu-item key="2">
                    <Link href="/profile">Profile</Link>
                </a-menu-item>
                <a-menu-item key="3">
                    <Link href="/login">Logout</Link>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
</script>
