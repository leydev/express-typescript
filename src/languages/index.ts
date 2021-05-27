import { I18n, ConfigurationOptions } from 'i18n';
import path from 'path';

const i18n: I18n = new I18n();

const configurationOptions: ConfigurationOptions = {
    locales: ['en'],
    directory: path.join(__dirname, 'locales'),
    register: global,
}

i18n.configure(configurationOptions);

export default i18n;
