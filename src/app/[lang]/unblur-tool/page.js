"use client";
import { useTranslation } from 'react-i18next';

export default function Unblur() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold">{t('Unblur Tool')}</h2>
        <p className="mt-3 text-gray-600">This is an example unblur tool page.</p>
      </div>
    </div>
  );
}