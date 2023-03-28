import { githubActions } from '@/store/github/github.slice';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from './redux';

const actions = {
  ...githubActions,
};

export default function useAppActions() {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
}
