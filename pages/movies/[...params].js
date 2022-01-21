import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({ params }) {
  //! router is only working on the client side
  // const router = useRouter();
  // console.log(router);

  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

//* this is good for SEO
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
