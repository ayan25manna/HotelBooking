import Card from '../../components/card/Card';
import Filter from '../../components/filter/filter';
import Map from '../../components/map/Map';
import {litsData} from '../../lib/dummyData';
// import { litsData } from '../../lib/dummyData';
import './listPage.scss';

function ListPage() {
  const data = litsData;
  return <div className='listPage'>
  <div className="listContainer">
    <div className="wrapper">
      <Filter/>
      {data.map(item=>(<Card key={item.id} item={item}/>))}
    </div>
  </div>
  <div className="mapContainer">
    <Map items={data}/>
  </div>
</div>
    
}

export default ListPage