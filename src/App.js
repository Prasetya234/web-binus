import { BrowserRouter, Switch , Link } from 'react-router-dom';
import Home from './component/Home';
import Sejarah from './component/Sejarah';
import Kepalasekolah from './component/Kepalasekolah';
import Guru from './component/Guru';
import Jurusan from './component/Jurusan';
import Alamatsekolah from './component/Alamatsekolah';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path="/" exact component={Home} />
      <Link path="/Sejarah" exact component={Sejarah} />
      <Link path="/Kepalasekolah" exact component={Kepalasekolah} />
      <Link path="/Guru" exact component={Guru} />
      <Link path="/Jurusan" exact component={Jurusan} />
      <Link path="/Alamatsekolah" exact component={Alamatsekolah} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
