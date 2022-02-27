import VueRouter from "vue-router";
import Overview from "@/components/Overview";
import YearOverview from "@/components/YearOverview";

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Overview,
        },
        {
            path: '/:year([0-9][0-9][0-9][0-9])',
            component: YearOverview,
        }
    ]
});

export default router