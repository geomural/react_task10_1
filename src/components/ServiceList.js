import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editServiceField} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = id => {
    let item = items.find(i => i.id == id);
    dispatch(editServiceField(item.name, item.price, item.id));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}          
          <button className="editBtn" onClick={() => handleEdit(o.id)}>
            <img className="penImg" src="/pen.png" alt=""/>
          </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
