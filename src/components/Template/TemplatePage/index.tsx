import React, {FC} from 'react';
import styles from './TemplatePage.scss';
import Heading1 from '../../elements/Headings/Heading1';
import Heading3 from '../../elements/Headings/Heading3';

type TemplatePageProps = {
    titlePage?: string;
    titleContent?: string;
}

const TemplatePage: FC<TemplatePageProps> = (
    {
        titlePage = 'Destroy Asteroids',
        children,
        titleContent
    }) => (
    <div className={styles.notGame}>
        <Heading1 headingTitle={titlePage}/>
        <main className={styles.w100}>
            <div className={styles.contentWrap}>
                {titleContent && (<div className={styles.contentWrapTitle}>
                    <Heading3 headingTitle={titleContent}/>
                </div>)}
                {children}
            </div>
        </main>
    </div>
);
export default TemplatePage;
