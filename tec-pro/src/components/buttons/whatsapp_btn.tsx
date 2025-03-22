import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Button } from './button';

export const BtnWhatsapp = () => {
  return (
    <Button 
      variant="whatsapp" 
      icon={<IconBrandWhatsapp size={20} />}
    >
      Contáctanos
    </Button>
  );
};
