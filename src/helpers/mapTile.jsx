import { ReactComponent as BigX } from '../assets/icon-x.svg';
import { ReactComponent as BigO } from '../assets/icon-o.svg';

export const mapTile = (mark) => {
   switch (mark) {
      case 'x':
         return <BigX />;
      case 'o':
         return <BigO />;
      default:
         return null;
   }
};
