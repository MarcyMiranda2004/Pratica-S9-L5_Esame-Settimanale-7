import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsGrid, BsGrid3X3 } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/SubBar.css';

const SubBarComponent = () => {
  return (
    <div className="container-fluid px-5 align-items-center mb-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">Movies</h2>
          <div className="btn-group" role="group">
            <Dropdown className="ms-4 mt-1">
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                id="dropdown-genres"
                style={{ backgroundColor: '#221f1f' }}
                className="rounded-0"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className='bg-n-secondary'>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Comedy</Dropdown.Item>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Drama</Dropdown.Item>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Thriller</Dropdown.Item>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Fantasy</Dropdown.Item>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Action</Dropdown.Item>
                <Dropdown.Item href="#" className='text-white DropdownItem'>Indi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="d-none d-md-flex align-items-center">
          <div className='border border-1 p-2 d-flex justify-content-center align-items-center'><BsGrid size={20} className='text-white' style={{cursor: 'pointer'}}/></div>
          <div className='border border-1 p-2 d-flex justify-content-center align-items-center'><BsGrid3X3 size={20} className='text-white' style={{cursor: 'pointer'}}/></div>
        </div>
      </div>
    </div>
  );
};

export default SubBarComponent;
