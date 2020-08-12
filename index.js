import {Select} from './select/select';
import './select/styles.scss';

const select = new Select('#select', {
  placeholder: 'Выберите элемент',
//  selectedId: '1', можно задать по умолчанию для выбора
  data: [
    {id: '1', value: 'Maria Brink'},
    {id: '2', value: 'Liv Jagrell'},
    {id: '3', value: 'Skye Sweetnam'},
    {id: '4', value: 'Alissa White Gluz'},
    {id: '5', value: 'Lena'},
  ],
  onSelect(item){
    console.log('Выбрано:', item);
  }
})


//для дебакинга из консоли
window.s = select;
