import { ReactElement } from 'react';
import styles from './ToolsItem.module.scss';

interface ToolProps {
  img: Record<string, string>;
  tool: string;
  text: string;
}

const ToolsItem: React.FC<ToolProps> = ({ img, tool, text }): ReactElement => {
  return (
    <li className={styles.tools__item}>
      <div className="icon">
        <img src={img.src} alt={img.alt} />
      </div>
      <div>
        <h3 className={styles.tools__tool}>{tool}</h3>
        <p className={styles.tools__text}>{text}</p>
      </div>
    </li>
  );
};

export default ToolsItem;
