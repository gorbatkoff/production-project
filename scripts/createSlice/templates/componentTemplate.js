const interfaceConst = "interface";

module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './${componentName}.module.scss';


${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(styles.${componentName}, {}, [className])}>
           
        </div>
    );
});`;
