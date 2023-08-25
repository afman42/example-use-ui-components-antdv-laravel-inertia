<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import LayoutNotSide from "../../Layout/NotSidebar.vue";
defineOptions({ layout: LayoutNotSide });

const formState = reactive({
    user: {
        username: "",
        password: "",
    },
    handleFinishFailed(e) {
        console.log(e);
    },
    handleFinish(e) {
        console.log(e);
        router.visit("/");
    },
});
</script>

<template>
    <div class="box-center">
        <a-card size="small" title="Login User" style="width: 300px">
            <a-form
                layout="vertical"
                :model="formState.user"
                @finish="formState.handleFinish"
                @finishFailed="formState.handleFinishFailed"
            >
                <a-form-item>
                    <a-input
                        v-model:value="formState.user.username"
                        placeholder="Username"
                    >
                        <template #prefix>
                            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-model:value="formState.user.password"
                        type="password"
                        placeholder="Password"
                    >
                        <template #prefix>
                            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button
                        type="primary"
                        html-type="submit"
                        :disabled="
                            formState.user.username === '' ||
                            formState.user.password === ''
                        "
                    >
                        Log in
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<style>
.box-center {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
