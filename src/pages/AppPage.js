import Header from '../components/Header';
import ContentNav from '../components/ContentNav';
import Content from '../components/Content';
import Modal from '../components/Modal';


function AppPage() {
  return (
    <div>
      <Modal/>
      <Header/>
      <ContentNav />
      <Content />
    </div>
  );
}

export default AppPage;
