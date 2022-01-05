import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './normalize.less';
import './global.less';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default function Index(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  console.log(props);
  return (
    <div>
      <Header />

      {props.children}

      <Footer />
    </div>
  );
}
