import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ forbes }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {forbes.map(element => {
          return (
            <ForbesListItem
              key={element.id}
              name={element.name}
              capital={element.capital}
              avatar={element.avatar}
              isIncrease={element.isIncrease}
            />
          );
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
