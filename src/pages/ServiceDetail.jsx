import { useParams, Navigate } from 'react-router-dom';
import DetailPage from '../components/DetailPage';
import { getService } from '../content/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const page = getService(slug);
  if (!page) return <Navigate to="/services" replace />;
  return <DetailPage page={page} parentLabel="Services" parentTo="/services" />;
}
