import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-10">
          <span className="text-(--color-primary) text-sm font-medium tracking-wider uppercase">{t('exp.header_1')}</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-5">{t('exp.section_title')}</h2>
          <p className="text-(--color-muted-foreground)">{t('exp.section_intro')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[8, 1, 2].map((id) => (
            <article key={id} className={`glass rounded-2xl p-7 border ${id === 8 ? 'border-(--color-primary)/50' : 'border-(--color-border)'}`}>
              <span className="text-sm text-(--color-primary)">{t(`exp.period_${id}`)}</span>
              <h3 className="text-3xl mt-3 mb-2">{t(`exp.role_${id}`)}</h3>
              <p className="text-sm mb-4">{t(`exp.company_${id}`)}</p>
              <p className="text-sm text-(--color-muted-foreground)">{t(`exp.desc_${id}`)}</p>
            </article>
          ))}
        </div>
        <details className="glass rounded-2xl p-6 md:p-8 mt-8">
          <summary className="cursor-pointer text-lg font-semibold text-(--color-primary)">{t('exp.previous_title')}</summary>
          <p className="text-sm text-(--color-muted-foreground) mt-4 mb-5">{t('exp.previous_intro')}</p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {[3,4,5,6,7].map(id => <div key={id} className="border-t border-(--color-border) pt-3">
              <h3 className="text-2xl">{t(`exp.role_${id}`)}</h3>
              <p className="text-sm text-(--color-muted-foreground)">{t(`exp.company_${id}`)} · {t(`exp.period_${id}`)}</p>
            </div>)}
          </div>
        </details>
      </div>
    </section>
  );
};
