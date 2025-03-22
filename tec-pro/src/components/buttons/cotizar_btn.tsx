import { IconPencil } from '@tabler/icons-react';
import { Button } from './button';

export const BtnCotizar = () => {
  return (
    <Button 
      variant="cotizacion" 
      icon={<IconPencil size={20} />}
    >
      Cotiza tu modelo 3D en línea
    </Button>
  );
};