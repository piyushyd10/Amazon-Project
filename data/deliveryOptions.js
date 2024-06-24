import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions=[{
  id:'1',
  deliveryDays:7,
  priceCents:0
},{
  id:'2',
  deliveryDays:3,
  priceCents:499
},{
  id:'3',
  deliveryDays:1,
  priceCents:999
}
];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option)=>{
    if(option.id===deliveryOptionId){
      deliveryOption=option;
    }
  });

  return deliveryOption || deliveryOption[0];
}

export function  calculateDeliveryDate(deliveryOption){
        let today=dayjs();
        let daysToAdd=deliveryOption.deliveryDays;
        
        while(daysToAdd>0){
          if(today.add(1,'days').format('dddd')==='Saturday' || today.add(1,'days').format('dddd')==='Sunday'){
            today=today.add(1,'days');
          }
          else{
            today=today.add(1,'days');
            daysToAdd--;
          }
        }
        const deliveryDate=today;
        const dateString=deliveryDate.format('dddd,MMMM D');
        
        return dateString;
}