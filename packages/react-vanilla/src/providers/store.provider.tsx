import React from 'react';

interface AppStore {
  //
}

const StoreContext = React.createContext<AppStore>({});

interface StoreProviderProps {
  children: React.ReactNode;
}
interface StoreProviderState {
  //
}
class StoreProvider extends React.Component<StoreProviderProps, StoreProviderState> {
  state = {};
  render() {
    return <StoreContext.Provider value={this.state}>{this.props.children}</StoreContext.Provider>;
  }
}

export default StoreProvider;
export { StoreContext };
