// src/components/Sections/Contact/index.tsx

import {EnvelopeIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const Contact: FC = memo(() => {
  const {headerText, description} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1 ">
            <ContactForm />
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-neutral-300">{description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;