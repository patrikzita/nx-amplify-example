import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@main-web/components/locale-switcher';
import NavigationLink from '@main-web/components/navigation-link';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
