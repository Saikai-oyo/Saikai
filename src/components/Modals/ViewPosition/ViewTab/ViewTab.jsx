import React from 'react';
import * as S from './viewTabStyle';
import { PositionsInput, LinkInput } from '../../../Input';

const ViewTab = ({ viewTab, position, edit }) => {
  return (
    <S.ViewPositionWrapper viewTab={viewTab}>
      <S.WrapperDate>
        <S.DateLabel htmlFor='addDate'>Application Date</S.DateLabel>
        <S.Date>{position.date}</S.Date>
      </S.WrapperDate>

      <S.ViewLineOne>
        <S.PositionGroup>
          <S.Label>Position Name</S.Label>
          {edit ? (
            <PositionsInput edit={true} type='text' value={position.position} />
          ) : (
            <S.PositionText>{position.position}</S.PositionText>
          )}
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Company Name</S.Label>
          {edit ? (
            <PositionsInput edit={true} type='text' value={position.name} />
          ) : (
            <S.PositionText>{position.name}</S.PositionText>
          )}
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Status</S.Label>
          <S.PositionText>{position.status}</S.PositionText>
          <S.UnderLineStatus title={position.status} />
        </S.PositionGroup>
      </S.ViewLineOne>

      <S.ViewLineTwo edit={edit}>
        <S.PositionGroup>
          <S.Label>Position Link</S.Label>
          {edit ? (
            <LinkInput edit={true} type='text' value={position.company_url} />
          ) : (
            <S.PositionText>
              <a
                href={position.company_url ? position.company_url : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                {position.company_url}
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
                edit={true}
                type='text'
                value={position.hr_name}
              />
            ) : (
              <S.PositionText>{position.hr_name}</S.PositionText>
            )}
          </S.PositionGroup>

          <S.PositionGroup>
            <S.Label>City</S.Label>
            {edit ? (
              <PositionsInput edit={true} type='text' value={position.city} />
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
                edit={true}
                type='text'
                value={position.hr_mail}
              />
            ) : (
              <S.PositionText>{position.hr_mail}</S.PositionText>
            )}
          </S.PositionGroup>

          <S.PositionGroup>
            <S.Label>Applied through</S.Label>
            {edit ? (
              <PositionsInput
                edit={true}
                type='text'
                value={position.appliedBy}
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
