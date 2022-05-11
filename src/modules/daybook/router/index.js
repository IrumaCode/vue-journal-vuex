

export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue'),
            
        },
        {
            path: ':id',
            name: 'entry-view',
            component: () => import(/* webpackChunkName: "Entry-View" */ '@/modules/daybook/views/EntryView.vue'),
            
        }
    ]


}