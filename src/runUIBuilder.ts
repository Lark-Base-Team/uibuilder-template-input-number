//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.inputNumber('number', { label: '基本使用', defaultValue: '28' }),
            form.inputNumber('number2', { label: '添加前缀', prefix: '￥' }),
        ],
        buttons: ['确定', '取消'],
    }), async ({ values }) => {
        const { number, number2 } = values;
    });
}