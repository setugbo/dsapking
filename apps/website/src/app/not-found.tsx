import { Container, Button } from '@marvinho/ui';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Container className="text-center">
        <p className="text-8xl font-extrabold text-[#C9A84C]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-[#141414]">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-gray-500">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary" size="lg" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="left">
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
