/** External Dependencies */
import React, { useCallback } from 'react';
import { Undo } from '@scaleflex/icons';

/** Internal Dependencies */
import { UNDO } from 'actions';
import { useStore } from 'hooks';
import { StyledHistoryButton } from './Topbar.styled';

const UndoButton = () => {
  const { dispatch, hasUndo = false } = useStore();
  const dispatchUndo = useCallback(() => {
    dispatch({ type: UNDO });
  }, []);

  return (
    <StyledHistoryButton
      color="link"
      onClick={hasUndo ? dispatchUndo : undefined}
      disabled={!hasUndo}
      title="Undo last operation"
    >
      <Undo size={12} />
    </StyledHistoryButton>
  );
};

export default UndoButton;
