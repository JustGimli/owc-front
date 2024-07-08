export const checkCardUtil = (name: string, value: string): any => {
    if (name === 'expirationDate') {
        value = value.replace(/\D/g, ''); 
        if (value.length > 2) {
          value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
        }
        if (value.length > 7) {
          value = value.slice(0, 7);
        }
      }
  
      if (name === 'cardNumber') {
        value = value.replace(/\D/g, ''); 
        if (value.length > 16) {
          value = value.slice(0, 16); 
        }
      }
  
      if (name === 'securityCode') {
        value = value.replace(/\D/g, '');
        if (value.length > 4) {
          value = value.slice(0, 4); 
        }
      }
  
      if (name === 'nameOnCard') {
        value = value.replace(/[^a-zA-Z\s]/g, ''); 
      }

    return {name, value}
}