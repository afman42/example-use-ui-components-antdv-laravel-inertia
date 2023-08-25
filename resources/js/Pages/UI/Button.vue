<template>
    <a-layout-content
        :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '',
        }"
    >
        <h3>Example Button</h3>
        <a-row>
            <a-col :span="24">
                <p>
                    There are primary button, default button, dashed button,
                    text button and link button.
                </p>
                <p>
                    <a-space direction="horizontal" wrap>
                        <a-button type="primary">Primary Button</a-button>
                        <a-button>Default Button</a-button>
                        <a-button type="dashed">Dashed Button</a-button>
                        <a-button type="text">Text Button</a-button>
                        <a-button type="link">Link Button</a-button>
                    </a-space>
                    <a-divider type="horizontal" />
                </p>

                <p>
                    To mark a button as disabled, add the disabled property to
                    the Button.
                </p>
                <p>
                    <a-space direction="horizontal" wrap>
                        <a-space>
                            <a-button type="primary">Primary</a-button>
                            <a-button type="primary" disabled
                                >Primary(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button>Default</a-button>
                            <a-button disabled>Default(disabled)</a-button>
                        </a-space>
                        <a-space>
                            <a-button type="dashed">Dashed</a-button>
                            <a-button type="dashed" disabled
                                >Dashed(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button type="text">Text</a-button>
                            <a-button type="text" disabled
                                >Text(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button type="link">Link</a-button>
                            <a-button type="link" disabled
                                >Link(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button danger>Danger Default</a-button>
                            <a-button danger disabled
                                >Danger Default(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button danger type="text">Danger Text</a-button>
                            <a-button danger type="text" disabled
                                >Danger Text(disabled)</a-button
                            >
                        </a-space>
                        <a-space>
                            <a-button danger type="link">Danger Link</a-button>
                            <a-button danger type="link" disabled
                                >Danger Link(disabled)</a-button
                            >
                        </a-space>
                        <div
                            :style="{
                                padding: '8px',
                                background: 'rgb(190, 200, 200)',
                            }"
                        >
                            <a-space>
                                <a-button ghost>Ghost</a-button>
                                <a-button ghost disabled
                                    >Ghost(disabled)</a-button
                                >
                            </a-space>
                        </div>
                    </a-space>
                </p>
                <a-divider type="horizontal" />

                <p>
                    A loading indicator can be added to a button by setting the
                    loading property on the Button.
                </p>
                <a-space direction="horizontal">
                    <a-space>
                        <a-button type="primary" loading>Loading</a-button>
                        <a-button type="primary" size="small" loading
                            >Loading</a-button
                        >
                    </a-space>
                    <a-space>
                        <a-button
                            type="primary"
                            :loading="loading"
                            @mouseenter="loading = true"
                        >
                            mouseenter me!
                        </a-button>
                        <a-button
                            type="primary"
                            :loading="iconLoading"
                            @click="enterIconLoading"
                        >
                            <template #icon><PoweroffOutlined /></template>
                            延迟1s
                        </a-button>
                    </a-space>
                    <a-space>
                        <a-button type="primary" loading />
                        <a-button type="primary" shape="circle" loading />
                        <a-button danger shape="round" loading />
                    </a-space>
                </a-space>
                <a-divider type="horizontal" />
                <p>
                    Button components can contain an Icon. This is done by
                    setting the icon property or placing an Icon component
                    within the Button. If you want specific control over the
                    positioning and placement of the Icon, then that should be
                    done by placing the Icon component within the Button rather
                    than using the icon property.
                </p>
                <a-space direction="horizontal" wrap>
                    <a-tooltip title="search">
                        <a-button
                            type="primary"
                            shape="circle"
                            :icon="h(SearchOutlined)"
                        />
                    </a-tooltip>
                    <a-button type="primary" shape="circle">A</a-button>
                    <a-button type="primary" :icon="h(SearchOutlined)"
                        >Search</a-button
                    >
                    <a-tooltip title="search">
                        <a-button shape="circle" :icon="h(SearchOutlined)" />
                    </a-tooltip>
                    <a-button :icon="h(SearchOutlined)">Search</a-button>
                    <a-tooltip title="search">
                        <a-button shape="circle" :icon="h(SearchOutlined)" />
                    </a-tooltip>
                    <a-button :icon="h(SearchOutlined)">Search</a-button>
                    <a-tooltip title="search">
                        <a-button
                            type="dashed"
                            shape="circle"
                            :icon="h(SearchOutlined)"
                        />
                    </a-tooltip>
                    <a-button type="dashed" :icon="h(SearchOutlined)"
                        >Search</a-button
                    >
                    <a-button
                        :icon="h(SearchOutlined)"
                        href="https://www.google.com"
                    />
                </a-space>
            </a-col>
        </a-row>
    </a-layout-content>
</template>

<script setup>
import { ref, h } from "vue";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons-vue";

const loading = ref(false);
const iconLoading = ref(false);
const enterIconLoading = () => {
    iconLoading.value = { delay: 1000 };

    setTimeout(() => {
        iconLoading.value = false;
    }, 6000);
};
</script>
