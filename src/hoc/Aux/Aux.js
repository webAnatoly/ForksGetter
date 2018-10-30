/* Hight-Order Component
Aux (от англ. auxiliary "вспомогательный")

Просто вспомогаетльный компонет-обертка. Возвращает переданный ему компонент.
Используется там где хочется избежать лишних вложенных div'ов.
*/
const aux = props => props.children;
export default aux;
