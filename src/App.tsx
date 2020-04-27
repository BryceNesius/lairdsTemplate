import * as React from 'react';
import { RenderWithNavbar } from './components/routing/render_with/a.navbar';
import './App.scss'

/**
 *  HIGHLY RECOMMEND: Download typescript snippets. It will save you hours.
 *  https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript
 * 
 */

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => <RenderWithNavbar />

export default App;
