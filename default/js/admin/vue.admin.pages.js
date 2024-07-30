
Vue.component(
    'Orders',
    {
        props: {
            header: {
                type: String,
                default: "Orders"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница заявок находится в разработке</h4>
                    <p>Здесь будут отображаться активные заявки и их статус</p>
                </div>
            </div>
        `
    }
);


Vue.component(
    'MassPayments',
    {
        props: {
            header: {
                type: String,
                default: "Mass Payments"
            },
        },
        delimiters: ['[[', ']]'],
        data() {
            return {
                table: [],
                loaded: false
            }
        },
        mounted () {
            this.refresh();
        },
        computed: {
            filtered_table(){
                return this.table;
            }
        },
        methods: {
            refresh(){
                let self = this;
                self.loaded = false;
                console.log('Refresh mass-payments table');
                axios
                   .get('/api/mass-payments')
                   .then(
                       response => (
                           self.table = response.data
                           //this.info = response
                       )
                   ).finally(
                       response => (
                           self.loaded = true
                       )
                   )
            },
        },
        template: `
            <div class="w-100">
                <loader v-if="!loaded"></loader>
                <table class="w-100 table table-striped table-hover" v-if="loaded">
                    <thead class="bg-dark">
                        <tr class="text-muted">
                            <th><b>ID</b></th>
                            <th>Transaction</th>
                            <th>Customer</th>
                            <th>Card</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filtered_table">
                            <td>
                                <b>[[ item.id ]]</b>
                            </td>
                            <td>
                                <ul class="list-inline text-left">
                                    <li v-for="(value, attr) in item.transaction">
                                        <span class="text-primary">
                                            [[ attr ]]:
                                        </span>
                                        <span class="text-secondary">
                                            [[ value ]]
                                        </span>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-inline text-left">
                                    <li v-for="(value, attr) in item.customer">
                                        <span class="text-primary">
                                            [[ attr ]]:
                                        </span>
                                        <span class="text-secondary">
                                            [[ value ]]
                                        </span>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-inline text-left">
                                    <li v-for="(value, attr) in item.card">
                                        <span class="text-primary">
                                            [[ attr ]]:
                                        </span>
                                        <span class="text-secondary">
                                            [[ value ]]
                                        </span>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-inline text-left">
                                    <li v-for="(value, attr) in item.status">
                                        <span class="text-primary">
                                            [[ attr ]]:
                                        </span>
                                        <span class="text-secondary">
                                            [[ value ]]
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    }
);


Vue.component(
    'ClientsDb',
    {
        props: {
            header: {
                type: String,
                default: "Clients Db"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница клиентов находится в разработке</h4>
                    <p>Здесь будут отображаться клиенты, их данные KYC из внутренней БД</p>
                </div>
            </div>
        `
    }
);

Vue.component(
    'ClientsCRM',
    {
        props: {
            header: {
                type: String,
                default: "Clients CRM"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница клиентов CRM находится в разработке</h4>
                    <p>Задумана синхронизация с данными о клиентах из CRM</p>
                </div>
            </div>
        `
    }
);

Vue.component(
    'Forms',
    {
        props: {
            header: {
                type: String,
                default: "Forms"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница редактирования форм инвойсов в разработке</h4>
                    <p>Здесь Вы скоро сможете формировать формы инвойсов для поставщиков и плательщиков</p>
                </div>
            </div>
        `
    }
);

Vue.component(
    'Rates',
    {
        props: {
            header: {
                type: String,
                default: "Rates"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница котировок в разработке</h4>
                    <p>Здесь Вы сможете отслеживать рыночные котировки</p>
                </div>
            </div>
        `
    }
);

Vue.component(
    'Any',
    {
        props: {
            header: {
                type: String,
                default: "--- Any ---"
            },
        },
        delimiters: ['[[', ']]'],
        template: `
            <div class="w-100 text-center">
                <div class="alert alert-danger">
                    <h4>Страница в разработке</h4>
                </div>
            </div>
        `
    }
);

