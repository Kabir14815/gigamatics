import { useParams, Navigate } from 'react-router-dom';
import DetailPage from '../components/DetailPage';
import { getManaged } from '../content/managed';

export default function ManagedDetail() {
  const { slug } = useParams();
  const page = getManaged(slug);
  if (!page) return <Navigate to="/managed-services" replace />;
  return <DetailPage page={page} parentLabel="Managed Services" parentTo="/managed-services" />;
}
