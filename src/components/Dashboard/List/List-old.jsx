import React from 'react';
import { addIcon, addPositionSVG } from '../../../assets/icons';
import './style.css';

const List = ({
  dataList,
  currentUser,
  setError,
  setMessage,
  setAddPosition,
  setSelectedPosition,
}) => {
  return (
    <>
      {!dataList ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border text-success' role='status'></div>
        </div>
      ) : (
        <div>
          <div className='col-md-1 addButtonWrapper  mt-2 mb-2'>
            <button
              type='button'
              className='addPositionButton'
              data-toggle='modal'
              data-target='.bd-add-position'
              onClick={() => setAddPosition(true)}
            >
              <img
                src={addPositionSVG}
                className='mr-3 addPositionButtonSvg'
                alt='add button'
              />
            </button>
          </div>
          <div className='container'>
            <div className='row row-col-6 text-center '>
              {dataList.map((data) => (
                <div key={data.title} className='p-2 mb-4 col-md cardLists'>
                  <h3 className='listTitle'>
                    {data.title}
                    <button
                      type='button'
                      className='addPositionButton'
                      data-toggle='modal'
                      data-target='.bd-add-position'
                      onClick={() => setAddPosition(true)}
                    >
                      <img src={addIcon} alt='Add Button' />
                    </button>
                  </h3>
                  <div id='positionWrapper'>
                    {data.items.map((position) => {
                      const cardColorsId =
                        position.status === 'Denied'
                          ? 'denied'
                          : position.status === 'Contract'
                          ? 'contract'
                          : position.status === 'In Progress'
                          ? 'inProgress'
                          : position.status === 'Received Task'
                          ? 'receivedTask'
                          : position.status === 'Applied'
                          ? 'applied'
                          : '';
                      return (
                        currentUser.uid === position.uid &&
                        data.title === position.status && (
                          <div
                            key={position.id}
                            className='card cardStyle mb-2 mt-3'
                            data-toggle='modal'
                            data-backdrop='static'
                            data-keyboard='false'
                            data-target='.bd-selected-position'
                          >
                            <div
                              className={`p-1 cardButton`}
                              id={`${cardColorsId}`}
                              onClick={() => {
                                setError('');
                                setMessage('');
                                setSelectedPosition(position);
                              }}
                            >
                              {position.position}
                              <br />
                              <span className='text-white-50 font-smaller'>
                                {position.name}
                              </span>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <div className='d-flex justify-content-end mr-2'>
        <button
          type='button'
          className='mt-3 addPositionButton'
          data-toggle='modal'
          data-target='.bd-add-position'
          onClick={() => setAddPosition(true)}
        >
          <img src={addIcon} className='mr-3 addIcon' alt='add button' />
          Add new Position
        </button>
      </div> */}
    </>
  );
};

export default List;
