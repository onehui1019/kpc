import Intact, {normalize} from 'intact';
import template from './alert.vdt';

export default function addStaticMethods(Dialog) {
    class AlertDialog extends Dialog {
        @Intact.template()
        static template = template;

        defaults() {
            return {
                ...super.defaults(),
                title: undefined,
                content: undefined,
                type: 'success',
                size: 'mini',
                hideIcon: false,
                hideFooter: false,
                showClose: false,
            };
        }
    }

    function show(options = {}) {
        return new Promise((resolve, reject) => {
            const dialog = new AlertDialog(options);
            dialog.show();
            dialog.on('ok', () => {
                resolve();
            });
            dialog.on('cancel', () => {
                reject();
            });
        });
    }

    ['success', 'warning', 'error', 'confirm'].forEach(type => {
        Dialog[type] = (options = {}) => {
            options = {...options, type};
            return show(options);
        }
    });
}
