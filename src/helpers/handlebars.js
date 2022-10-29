const handlebars = require('handlebars');
module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fa fa-sort',
            desc: 'fa fa-sort-alpha-desc',
            asc: 'fa fa-sort-alpha-asc'
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }

        const icon = icons[sortType];
        const type = types[sortType];
        const href = handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
        const output = `<a href="${href}"><i class="${icon}" aria-hidden="true" ></i></a>`;
        return new handlebars.SafeString(output);
    }
};