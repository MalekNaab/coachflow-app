import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: 'full' | '7xl' | '6xl' | '5xl';
  padding?: 'default' | 'compact' | 'spacious';
}

/**
 * Responsive container for page content with consistent padding and max-width
 * Desktop-first design with mobile adaptive spacing
 */
export function PageContainer({
  children,
  maxWidth = '7xl',
  padding = 'default',
}: PageContainerProps) {
  const maxWidthClasses = {
    full: 'max-w-full',
    '7xl': 'max-w-7xl',
    '6xl': 'max-w-6xl',
    '5xl': 'max-w-5xl',
  };

  const paddingClasses = {
    compact: 'px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8',
    default: 'px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10',
    spacious: 'px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12',
  };

  return (
    <div className={`w-full ${paddingClasses[padding]}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        {children}
      </div>
    </div>
  );
}
