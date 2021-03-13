import React from 'react';
import { addIcon } from '../../../assets/icons';

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
        <div className='container'>
          <div className='row mt-5 text-center'>
            {dataList.map((data) => (
              <div
                key={data.title}
                className='p-2 mb-4 col-md-2 h-100 cardLists'
              >
                <h3 className='listTitle'>{data.title}</h3>

                {data.items.map((company) => {
                  const isDenied =
                    company.status === 'Denied' ? 'danger' : 'success';
                  return (
                    currentUser.uid === company.uid &&
                    data.title === company.status && (
                      <div
                        key={company.id}
                        className='card cardStyle mb-2 mt-3'
                        data-toggle='modal'
                        data-target='.bd-selected-position'
                      >
                        <div
                          className={`btn-${isDenied} p-1 cardButton`}
                          onClick={() => {
                            setError('');
                            setMessage('');
                            setSelectedPosition(company);
                          }}
                        >
                          {company.position}
                          <br />
                          <span className='text-white-50 font-smaller'>
                            {company.name}
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='d-flex justify-content-end mr-2'>
        <button
          type='button'
          className='mt-3 addCompanyButton'
          data-toggle='modal'
          data-target='.bd-add-position'
          onClick={() => setAddPosition(true)}
        >
          <img src={addIcon} className='mr-3 addIcon' alt='add button' />
          Add new Position
        </button>
      </div>
    </>
  );
};

export default List;
