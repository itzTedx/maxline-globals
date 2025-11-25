import { Route } from 'next'
import Link from 'next/link'

import { IconArrowRight } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

import { Button } from '../ui/button'

export default function AnnouncementBanner() {
  const t = useTranslations('banner')

  return (
    <div className="relative z-1000 bg-primary px-4 py-2 text-foreground md:py-3">
      <div className="flex items-center justify-center gap-4">
        <Link
          className="hover:underline"
          href={'/insights/maxline-global-automechanika-dubai-2025' as Route}
          title="Maxline Global Logistics at Automechanika Dubai 2025"
        >
          <p className="font-medium text-xs sm:text-base">{t('title')}</p>
        </Link>
        <Button
          asChild
          className="text-sm hover:bg-brand-dark hover:text-white max-sm:size-7"
          size="sm"
          variant="secondary"
        >
          <Link
            href={'/insights/maxline-global-automechanika-dubai-2025' as Route}
            title="Maxline Global Logistics at Automechanika Dubai 2025"
          >
            <span className="hidden sm:block">{t('register')}</span>
            <IconArrowRight className="rtl:group-hover:-translate-x-1 size-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        {/* <Button
          asChild
          className="group text-sm hover:bg-brand-dark hover:text-white max-sm:size-7"
          size="sm"
          variant="default"
        >
          <Link
            href="https://www.messefrankfurtme-registration.com/MF_Shop/AMDU25/PublicRegistration?assortment=00000000-0000-0000-0000-000000000000"
            rel="noreferrer noopener"
            target="_blank"
            title="Maxline Global Logistics at Automechanika Dubai 2025"
          >
            <span className="hidden sm:block">{t('register')}</span>
            <IconArrowRight className="rtl:group-hover:-translate-x-1 size-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button> */}
      </div>
    </div>
  )
}
