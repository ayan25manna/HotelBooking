import './Liat.scss';
import Card from "../card/Card";
import {litsData} from "../../lib/dummyData";
function List() {
  return (
    <div className='list'>
        {litsData.map(item=>(
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default List