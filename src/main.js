import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//PRIMEVUE IMPORTS
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/tailwind-light/theme.css"    //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"
//TABLE IMPORTS
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
//FORM INPUTS
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';
//MY COMPONENTS
import BaseButton from "./components/base/BaseButton.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseBigCard from "./components/base/BaseBigCard.vue";

const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-big-card", BaseBigCard);

//PRIMEVUE COMPONENTS
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("InputText", InputText);
app.directive("Tooltip", Tooltip);
//APP MOUNT
app.mount("#app");
