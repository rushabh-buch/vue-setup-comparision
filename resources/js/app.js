import {createApp, h} from "vue";
import {createInertiaApp} from "@inertiajs/inertia-vue3";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue");

        // page.default.layout = page.default.layout || MainLayout

        return await pages[`./Pages/${name}.vue`]();
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el);
    },
});
