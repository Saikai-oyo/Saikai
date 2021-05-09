import React, { useContext, useState } from 'react';
import * as S from './viewTabStyle';
import {
  PositionsInput,
  LinkInput,
  DateInput,
  StatusInput,
} from '../../../Input';
import { UpdatedPositionContext } from '../../../../contexts/UpdatedPositionContext';
import { formatReversDate } from '../../../../helpers';

const ViewTab = ({ viewTab, position, edit }) => {
  const { updatedPosition, setUpdatedPosition } = useContext(
    UpdatedPositionContext
  );
  const [title, setTitle] = useState(position.status);

  return (
    <S.ViewPositionWrapper viewTab={viewTab}>
      <S.WrapperDate edit={true}>
        <S.DateLabel htmlFor='addDate'>Application Date</S.DateLabel>
        {edit ? (
          <DateInput
            tabIndex='9'
            edit={true}
            type='date'
            value={`${formatReversDate(position.date)}`}
            onChange={(e) =>
              setUpdatedPosition({
                updated: {
                  ...updatedPosition.updated,
                  date: e.target.value,
                },
                didUpdate: true,
              })
            }
          />
        ) : (
          <S.Date>{position.date}</S.Date>
        )}
      </S.WrapperDate>

      <S.ViewLineOne edit={edit}>
        <S.PositionGroup>
          <S.Label>Position Name</S.Label>
          {edit ? (
            <PositionsInput
              tabIndex='1'
              edit={true}
              type='text'
              value={position.position}
              onChange={(e) =>
                setUpdatedPosition({
                  updated: {
                    ...updatedPosition.updated,
                    position: e.target.value,
                  },
                  didUpdate: true,
                })
              }
            />
          ) : (
            <S.PositionText>{position.position}</S.PositionText>
          )}
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Company Name</S.Label>
          {edit ? (
            <PositionsInput
              tabIndex='2'
              edit={true}
              type='text'
              value={position.name}
              onChange={(e) =>
                setUpdatedPosition({
                  updated: { ...updatedPosition.updated, name: e.target.value },
                  didUpdate: true,
                })
              }
            />
          ) : (
            <S.PositionText>{position.name}</S.PositionText>
          )}
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Status</S.Label>
          {edit ? (
            <StatusInput
              tabIndex='3'
              edit={edit}
              name='status'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setUpdatedPosition({
                  updated: {
                    ...updatedPosition.updated,
                    status: e.target.value,
                  },
                  didUpdate: true,
                });
              }}
            />
          ) : (
            <>
              <S.PositionText>{position.status}</S.PositionText>
              <S.UnderLineStatus title={position.status} />
            </>
          )}
        </S.PositionGroup>
      </S.ViewLineOne>

      <S.ViewLineTwo edit={edit}>
        <S.PositionGroup>
          <S.Label>Position Link</S.Label>
          {edit ? (
            <LinkInput
              tabIndex='4'
              edit={true}
              type='text'
              onChange={(e) =>
                setUpdatedPosition({
                  updated: {
                    ...updatedPosition.updated,
                    position_url: e.target.value,
                  },
                  didUpdate: true,
                })
              }
              value={position.position_url}
            />
          ) : (
            <S.PositionText>
              <a
                href={position.position_url ? position.position_url : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                {position.position_url}
              </a>
            </S.PositionText>
          )}
        </S.PositionGroup>
      </S.ViewLineTwo>

      <S.ViewLineThree edit={edit}>
        <S.GroupWrapper edit={edit}>
          <S.PositionGroup>
            <S.Label>HR Name</S.Label>
            {edit ? (
              <PositionsInput
                tabIndex='5'
                edit={true}
                type='text'
                value={position.hr_name}
                onChange={(e) =>
                  setUpdatedPosition({
                    updated: {
                      ...updatedPosition.updated,
                      hr_name: e.target.value,
                    },
                    didUpdate: true,
                  })
                }
              />
            ) : (
              <S.PositionText>{position.hr_name}</S.PositionText>
            )}
          </S.PositionGroup>

          <S.PositionGroup>
            <S.Label>City</S.Label>
            {edit ? (
              <PositionsInput
                edit={true}
                tabIndex='6'
                type='text'
                value={position.city}
                onChange={(e) =>
                  setUpdatedPosition({
                    updated: {
                      ...updatedPosition.updated,
                      city: e.target.value,
                    },
                    didUpdate: true,
                  })
                }
              />
            ) : (
              <S.PositionText>{position.city}</S.PositionText>
            )}
          </S.PositionGroup>
        </S.GroupWrapper>

        <S.GroupWrapper edit={edit}>
          <S.PositionGroup>
            <S.Label>HR Email</S.Label>
            {edit ? (
              <PositionsInput
                tabIndex='7'
                edit={true}
                type='text'
                value={position.hr_mail}
                onChange={(e) =>
                  setUpdatedPosition({
                    updated: {
                      ...updatedPosition.updated,
                      hr_mail: e.target.value,
                    },
                    didUpdate: true,
                  })
                }
              />
            ) : (
              <S.PositionText>{position.hr_mail}</S.PositionText>
            )}
          </S.PositionGroup>

          <S.PositionGroup>
            <S.Label>Applied through</S.Label>
            {edit ? (
              <PositionsInput
                tabIndex='8'
                edit={true}
                type='text'
                value={position.appliedBy}
                onChange={(e) =>
                  setUpdatedPosition({
                    updated: {
                      ...updatedPosition.updated,
                      appliedBy: e.target.value,
                    },
                    didUpdate: true,
                  })
                }
              />
            ) : (
              <S.PositionText>{position.appliedBy}</S.PositionText>
            )}
          </S.PositionGroup>
        </S.GroupWrapper>
      </S.ViewLineThree>
    </S.ViewPositionWrapper>
  );
};

export default ViewTab;
