import React from 'react';
import * as S from './viewTabStyle';

const ViewTab = ({ viewTab, position }) => {
  return (
    <S.ViewPositionWrapper viewTab={viewTab}>
      <S.WrapperDate>
        <S.DateLabel htmlFor='addDate'>Application Date</S.DateLabel>
        <S.Date>{position.date}</S.Date>
      </S.WrapperDate>

      <S.ViewLineOne>
        <S.PositionGroup>
          <S.Label>Position Name</S.Label>
          <S.PositionText>{position.position}</S.PositionText>
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Company Name</S.Label>
          <S.PositionText>{position.name}</S.PositionText>
        </S.PositionGroup>

        <S.PositionGroup>
          <S.Label>Status</S.Label>
          <S.PositionText>{position.status}</S.PositionText>
          <S.UnderLineStatus title={position.status} />
        </S.PositionGroup>
      </S.ViewLineOne>

      <S.ViewLineTwo>
        <S.PositionGroup>
          <S.Label>Position Link</S.Label>
          <S.PositionText>
            <a
              href={position.company_url ? position.company_url : '#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              {position.company_url}
            </a>
          </S.PositionText>
        </S.PositionGroup>
      </S.ViewLineTwo>

      <S.ViewLineThree>
        <S.GroupWrapper>
          <S.PositionGroup>
            <S.Label>HR Name</S.Label>
            <S.PositionText>{position.hr_name}</S.PositionText>
          </S.PositionGroup>
          <S.PositionGroup>
            <S.Label>City</S.Label>
            <S.PositionText>{position.city}</S.PositionText>
          </S.PositionGroup>
        </S.GroupWrapper>

        <S.GroupWrapper>
          <S.PositionGroup>
            <S.Label>HR Email</S.Label>
            <S.PositionText>{position.hr_mail}</S.PositionText>
          </S.PositionGroup>

          <S.PositionGroup>
            <S.Label>Applied through</S.Label>
            <S.PositionText>{position.appliedBy}</S.PositionText>
          </S.PositionGroup>
        </S.GroupWrapper>
      </S.ViewLineThree>
    </S.ViewPositionWrapper>
  );
};

export default ViewTab;
